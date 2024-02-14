import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import compress from "astro-compress";
import purgecss from "astro-purgecss";
import metaTags from "astro-meta-tags";
import lighthouse from "astro-lighthouse";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8000,
    open: true,
    
  },
  site: "https://fruit-ui.vercel.app/",
  trailingSlash: "ignore",
  integrations: [mdx({
    optimize: true,
    shikiConfig: {
      theme: "material-theme"
    }
  }), /* partytown() ,*/ sitemap(), compress(), purgecss(), AstroPWA({
    experimental: {
      directoryAndTrailingSlashHandler: true
    },
    registerType: "autoUpdate",
    devOptions: {
      enabled: false
    },
    workbox: {
      globPatterns: ["**/*.*"],
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true
    },
    manifest: {
      name: "fruitUI",
      description: "fruitUI a modular styling framework",
      theme_color: "#18181B",
      background_color: "#fff",
      display: "standalone",
      scope: "/",
      start_url: "/",
      orientation: "portrait",
      icons: [{
        src: "/icons/trademark-192.png",
        sizes: "192x192",
        type: "image/png"
      }, {
        src: "/icons/trademark-512.png",
        sizes: "512x512",
        type: "image/png"
      }, {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple-touch-icon"
      }, {
        src: "/icons/trademark-225.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable"
      }, {
        src: "/icons/trademark-144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any maskable"
      }]
    }
  }), metaTags(), lighthouse(), icon()]
});