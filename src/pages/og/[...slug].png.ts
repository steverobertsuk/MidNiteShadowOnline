export const prerender = false;
export const runtime = 'edge';

import type { APIRoute } from 'astro';
import satori from 'satori';
import { initWasm, Resvg } from '@resvg/resvg-wasm';

// Module-level WASM state — initialised once per isolate
let wasmReady = false;
let cinzelFont: ArrayBuffer | null = null;
let ralewayFont: ArrayBuffer | null = null;

async function ensureWasm(wasmUrl: string): Promise<void> {
  if (wasmReady) return;
  await initWasm(fetch(wasmUrl));
  wasmReady = true;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  // Request TTF by sending a non-Chrome UA
  const cssRes = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`,
    { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; OGBot/1.0)' } },
  );
  const css = await cssRes.text();

  // Extract the first font src URL from the CSS response
  const match = css.match(/src:\s*url\(([^)]+)\)\s+format\('(?:truetype|opentype|woff2)'\)/);
  if (!match?.[1]) throw new Error(`No font URL found in Google Fonts CSS for ${family} ${weight}`);

  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

// Simple element builder — mirrors what React.createElement produces for satori
function el(
  type: string,
  props: Record<string, unknown>,
  ...children: unknown[]
): unknown {
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

export const GET: APIRoute = async ({ url, request }) => {
  try {
    const title = url.searchParams.get('title') || 'MidNite Shadow Online';
    const description = url.searchParams.get('description') ?? undefined;

    const origin = new URL(request.url).origin;

    // Initialise WASM — served as a static asset at this path
    await ensureWasm(`${origin}/assets/wasm/resvg.wasm`);

    // Load fonts once per isolate (cached in module scope)
    if (!cinzelFont) cinzelFont = await loadGoogleFont('Cinzel', 700);
    if (!ralewayFont) ralewayFont = await loadGoogleFont('Raleway', 400);

    // Fetch images in parallel
    const [bgBuffer, logoBuffer] = await Promise.all([
      fetch(`${origin}/assets/images/hero_purple_embers.webp`).then((r) => r.arrayBuffer()),
      fetch(`${origin}/assets/images/mns7_profile.webp`).then((r) => r.arrayBuffer()),
    ]);

    const bgDataUrl = `data:image/webp;base64,${arrayBufferToBase64(bgBuffer)}`;
    const logoDataUrl = `data:image/webp;base64,${arrayBufferToBase64(logoBuffer)}`;

    const textChildren: unknown[] = [
      el(
        'div',
        {
          style: {
            fontFamily: 'Cinzel',
            fontSize: title.length > 50 ? '52px' : '64px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
          },
        },
        title,
      ),
    ];

    if (description) {
      textChildren.push(
        el(
          'div',
          {
            style: {
              fontFamily: 'Raleway',
              fontSize: '28px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.45,
              marginTop: '20px',
            },
          },
          description,
        ),
      );
    }

    const node = el(
      'div',
      {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
        },
      },
      // Full-bleed background
      el('img', {
        src: bgDataUrl,
        style: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '1200px',
          height: '630px',
          objectFit: 'cover',
        },
      }),
      // Dark gradient overlay for readability
      el('div', {
        style: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '1200px',
          height: '630px',
          background:
            'linear-gradient(to right, rgba(5,3,18,0.92) 0%, rgba(5,3,18,0.75) 55%, rgba(5,3,18,0.30) 100%)',
        },
      }),
      // Content layer
      el(
        'div',
        {
          style: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1200px',
            height: '630px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 80px 64px',
          },
        },
        // Header: logo + site name
        el(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '18px',
            },
          },
          el('img', {
            src: logoDataUrl,
            style: {
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              objectFit: 'cover',
            },
          }),
          el(
            'span',
            {
              style: {
                fontFamily: 'Cinzel',
                fontSize: '22px',
                fontWeight: 700,
                color: '#c9a227',
                letterSpacing: '0.08em',
              },
            },
            'MidNite Shadow Online',
          ),
        ),
        // Title + description block
        el('div', { style: { display: 'flex', flexDirection: 'column' } }, ...textChildren),
      ),
    );

    const svg = await satori(node as Parameters<typeof satori>[0], {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Cinzel', data: cinzelFont, weight: 700, style: 'normal' },
        { name: 'Raleway', data: ralewayFont, weight: 400, style: 'normal' },
      ],
    });

    const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
    const png = resvg.render().asPng();

    return new Response(png.buffer as ArrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    // WASM JIT compilation is blocked in the local workerd sandbox — redirect to
    // the static fallback so dev/preview stays quiet. Production Workers allow it.
    const isWasmError = err instanceof Error && err.message.includes('Wasm code generation disallowed');
    if (!isWasmError) console.error('[OG image generation]', err);
    return Response.redirect(new URL('/assets/images/hero_purple_embers.webp', url.origin).href, 302);
  }
};
