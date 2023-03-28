import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

import proxyMiddleware from './plugins/proxy-middleware.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), react(),  proxyMiddleware("/api", {
    target: "http://localhost:3001",
    changeOrigin: true,
  }),],
  server: { port: 5001 }
});