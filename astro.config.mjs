import { defineConfig } from "astro/config";
export default defineConfig({
  site: process.env.SITE_URL ?? "https://midniteshadow.online",
  output: "static",
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
