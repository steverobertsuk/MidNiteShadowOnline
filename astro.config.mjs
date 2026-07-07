import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');
const defaultSiteUrl = 'https://midniteshadow.online';

function resolveSiteUrl(rawSite) {
  if (!rawSite) return defaultSiteUrl;

  try {
    return new URL(rawSite).toString();
  } catch {
    console.warn(
      `[astro.config] Ignoring invalid SITE value "${rawSite}". Falling back to ${defaultSiteUrl}.`
    );
    return defaultSiteUrl;
  }
}

// Error/utility pages that crawlers should not be sent to.
const sitemapExcludedPaths = [
  '/403/',
  '/404/',
  '/500/',
  '/503/',
  '/1000/',
  '/challenge/',
  '/under-attack/',
];

export default defineConfig({
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !sitemapExcludedPaths.includes(new URL(page).pathname),
    }),
  ],
  site: resolveSiteUrl(env.SITE),
  adapter: cloudflare({
    imageService: 'passthrough',
    configPath: 'wrangler.dev.toml',
  }),
  image: {
    service: passthroughImageService(),
  },
  server: {
    port: 7770,
  },
  preview: {
    port: 7770,
  },
  vite: {
    server: {
      strictPort: true,
    },
  },
});
