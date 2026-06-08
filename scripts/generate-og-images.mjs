#!/usr/bin/env node
/**
 * Build-time OG image generator.
 *
 * Scans every HTML file under dist/client/, extracts og:title + og:description,
 * generates a 1200×630 PNG using satori + @resvg/resvg-wasm (Node.js — no
 * WASM restrictions), and writes it to dist/client/og/<slug>.png.
 *
 * Slug derivation mirrors BaseLayout.astro:
 *   /           → default
 *   /gaming/    → gaming
 *   /gaming/star-trek-online/ → gaming-star-trek-online
 *
 * Exits with code 1 if any image fails to generate.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { createRequire } from "node:module";
import sharp from "sharp";
import satori from "satori";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
const args = process.argv.slice(2);
const force = args.includes("--force");
const distArg = args.find((a) => !a.startsWith("--")) ?? "dist";
const clientDir = join(process.cwd(), distArg, "client");
const publicOgDir = join(process.cwd(), "public", "assets", "og");
const distOgDir = join(clientDir, "assets", "og");

// ---------------------------------------------------------------------------
// WASM initialisation — read from disk; no dynamic-compile restrictions in Node
// ---------------------------------------------------------------------------
const require = createRequire(import.meta.url);
const wasmPath = require.resolve("@resvg/resvg-wasm/index_bg.wasm");
await initWasm(readFileSync(wasmPath));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert any image buffer to a JPEG data URI (satori v0.26 lacks WebP support). */
async function toJpegDataUrl(buffer) {
  const jpeg = await sharp(buffer).jpeg({ quality: 92 }).toBuffer();
  return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
}

function extractMeta(html, property) {
  const re = new RegExp(
    `<meta[^>]+property="${property}"[^>]+content="([^"]*)"` +
      `|<meta[^>]+content="([^"]*)"[^>]+property="${property}"`,
    "i"
  );
  const m = html.match(re);
  return (m?.[1] ?? m?.[2] ?? "").replace(/&amp;/g, "&").replace(/&#039;/g, "'");
}

/** Convert a file path inside clientDir to the same slug BaseLayout uses. */
function pathToSlug(htmlPath) {
  const rel = relative(clientDir, htmlPath).replace(/\\/g, "/");
  const withoutIndex = rel.replace(/(?:^|\/)index\.html$/, "").replace(/\.html$/, "");
  if (!withoutIndex) return "default";
  return withoutIndex.replace(/\//g, "-");
}

/** Recursively yield all .html files under dir. */
async function* findHtml(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* findHtml(p);
    else if (entry.name.endsWith(".html")) yield p;
  }
}

// ---------------------------------------------------------------------------
// Font loading (Google Fonts — same approach as the old edge endpoint)
// ---------------------------------------------------------------------------
async function loadGoogleFont(family, weight) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0 (compatible; OGBot/1.0)" } }
  ).then((r) => r.text());

  const match = css.match(/src:\s*url\(([^)]+)\)\s+format\('(?:truetype|opentype|woff2)'\)/);
  if (!match?.[1]) throw new Error(`No font URL found for ${family} ${weight}`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

// ---------------------------------------------------------------------------
// Satori element builder
// ---------------------------------------------------------------------------
function el(type, props, ...children) {
  const resolvedChildren =
    children.length === 0 ? undefined
    : children.length === 1 ? children[0]
    : children;
  return {
    type,
    key: null,
    props: resolvedChildren !== undefined ? { ...props, children: resolvedChildren } : props,
  };
}

// ---------------------------------------------------------------------------
// OG image generation
// ---------------------------------------------------------------------------
async function generateOgImage({ title, description, bgDataUrl, logoDataUrl, cinzelFont, ralewayFont }) {
  const textChildren = [
    el(
      "div",
      {
        style: {
          fontFamily: "Cinzel",
          fontSize: title.length > 50 ? "52px" : "64px",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.15,
        },
      },
      title
    ),
  ];

  if (description) {
    textChildren.push(
      el(
        "div",
        {
          style: {
            fontFamily: "Raleway",
            fontSize: "28px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.45,
            marginTop: "24px",
          },
        },
        description
      )
    );
  }

  const node = el(
    "div",
    {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      },
    },
    // Full-bleed background
    el("img", {
      src: bgDataUrl,
      style: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "1200px",
        height: "630px",
        objectFit: "cover",
      },
    }),
    // Gradient: heavy on the left where text sits, fades toward the right
    el("div", {
      style: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "1200px",
        height: "630px",
        background:
          "linear-gradient(to right, rgba(5,3,18,0.93) 0%, rgba(5,3,18,0.86) 55%, rgba(5,3,18,0.60) 73%, rgba(5,3,18,0.25) 100%)",
      },
    }),
    // Content row
    el(
      "div",
      {
        style: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "row",
        },
      },
      // Left 73%: title + description, vertically centred
      el(
        "div",
        {
          style: {
            width: "876px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "60px",
            paddingRight: "56px",
            paddingBottom: "60px",
            paddingLeft: "80px",
          },
        },
        ...textChildren
      ),
      // Right 27%: profile image, centred
      el(
        "div",
        {
          style: {
            width: "324px",
            height: "630px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        },
        el("img", {
          src: logoDataUrl,
          style: {
            width: "290px",
            height: "290px",
            objectFit: "contain",
          },
        })
      )
    )
  );

  const svg = await satori(node, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Cinzel", data: cinzelFont, weight: 700, style: "normal" },
      { name: "Raleway", data: ralewayFont, weight: 400, style: "normal" },
    ],
  });

  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
console.log(`Generating OG images${force ? "" : " (skipping existing)"}…`);

mkdirSync(publicOgDir, { recursive: true });
mkdirSync(distOgDir, { recursive: true });

// Load shared assets once
const [cinzelFont, ralewayFont] = await Promise.all([
  loadGoogleFont("Cinzel", 700),
  loadGoogleFont("Raleway", 400),
]);

const bgBuffer = readFileSync(join(clientDir, "assets/images/hero_purple_embers.webp"));
const logoBuffer = readFileSync(join(clientDir, "assets/images/mns7_profile.webp"));
const [bgDataUrl, logoDataUrl] = await Promise.all([
  toJpegDataUrl(bgBuffer),
  toJpegDataUrl(logoBuffer),
]);

// Collect all HTML files
const htmlFiles = [];
for await (const f of findHtml(clientDir)) htmlFiles.push(f);

// Generate
let generated = 0;
let skipped = 0;
let failed = 0;

for (const htmlFile of htmlFiles) {
  const slug = pathToSlug(htmlFile);
  const publicOut = join(publicOgDir, `${slug}.png`);
  const distOut = join(distOgDir, `${slug}.png`);

  if (!force && existsSync(publicOut)) {
    skipped++;
    continue;
  }

  try {
    const html = readFileSync(htmlFile, "utf8");
    const rawTitle = extractMeta(html, "og:title") || "MidNite Shadow Online";
    const title = rawTitle.replace(/\s*\|.*$/, "").trim() || rawTitle;
    const description = extractMeta(html, "og:description") || undefined;
    const png = await generateOgImage({ title, description, bgDataUrl, logoDataUrl, cinzelFont, ralewayFont });
    writeFileSync(publicOut, png);
    writeFileSync(distOut, png);
    generated++;
  } catch (err) {
    console.error(`  ✗ ${slug}: ${err.message}`);
    failed++;
  }
}

// Verify: every HTML has a matching image in dist (public images are copied by astro build;
// newly-generated ones were written above; either way dist must have them all)
const unverified = [];
for (const htmlFile of htmlFiles) {
  const slug = pathToSlug(htmlFile);
  if (!existsSync(join(distOgDir, `${slug}.png`))) unverified.push(slug);
}

const summary = [
  generated > 0 && `${generated} generated`,
  skipped > 0 && `${skipped} skipped`,
  failed > 0 && `${failed} failed`,
].filter(Boolean).join(", ");
console.log(`OG images: ${summary || "nothing to do"}.`);

if (unverified.length > 0) {
  console.error("Missing OG images for routes:");
  unverified.forEach((s) => console.error(`  /og/${s}.png`));
  process.exit(1);
}

console.log("OG image audit passed — all routes have an image.");
