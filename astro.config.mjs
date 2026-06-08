import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import { loadEnv } from "vite";
import { cpSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const env = loadEnv("", process.cwd(), "");

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Copies the resvg WASM binary into public so it is served as a static asset. */
const copyResvgWasm = {
  name: "copy-resvg-wasm",
  buildStart() {
    cpSync(
      resolve(__dirname, "node_modules/@resvg/resvg-wasm/index_bg.wasm"),
      resolve(__dirname, "public/assets/wasm/resvg.wasm"),
    );
  },
};

export default defineConfig({
  integrations: [mdx()],
  site: env.SITE ?? "https://midniteshadow.online",
  adapter: cloudflare({
    imageService: "passthrough",
    configPath: "wrangler.dev.toml",
  }),
  image: {
    service: passthroughImageService(),
  },
  server: {
    port: 8080,
  },
  preview: {
    port: 8080,
  },
  vite: {
    server: {
      strictPort: true,
    },
    plugins: [copyResvgWasm],
  },
});
