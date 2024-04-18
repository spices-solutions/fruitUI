import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import metaTags from "astro-meta-tags";
import icon from "astro-icon";
import pageInsight from "astro-page-insight";
import compressor from "astro-compressor";
import AutoImport from "astro-auto-import";

import Wathqny from "./wathqny.config";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8000,
  },
  site: "https://fruit-ui.vercel.app/",
  trailingSlash: "ignore",
  integrations: [
    AutoImport({
      imports: [
        {
          "astro:assets": ["Image"],
          "wtqcode": ["BrowserBlock", "CodeBlock"],
        },
      ],
    }),
    mdx({
      optimize: true,
      shikiConfig: {
        theme: "material-theme",
      },
    }),
    sitemap(),
    compress(),
    purgecss(),
    AstroPWA({
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
      },
      pwaAssets: {
        config: true,
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      manifest: {
        name: Wathqny.siteName,
        description: Wathqny.description,
        theme_color: "#18181B",
        background_color: "#fff",
        display: "standalone",
        scope: "/",
        base: "/",
        orientation: "portrait",
      },
    }),
    metaTags(),
    icon({
      iconDir: "src/assets/icons",
    }),
    pageInsight(),
    compressor({ gzip: true, brotli: false }),
  ],
});
