import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), '');

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
  site: env.SITE ?? 'https://midniteshadow.online',
  adapter: cloudflare({
    imageService: 'passthrough',
    configPath: 'wrangler.dev.toml',
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
  },
});
