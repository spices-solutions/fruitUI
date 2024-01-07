import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import AstroPWA from '@vite-pwa/astro'


// https://astro.build/config
export default defineConfig({
  site: "https://fruit-ui.pages.dev",
  integrations: [mdx({
    optimize: true,
    shikiConfig: {
      theme: 'material-theme'
    }
  }), partytown(), sitemap(),AstroPWA({
    manifest: {
      name:"fruitUI",
      description: "fruitUI a modular styling framework",
      theme_color: "#fff",
      background_color: "#18181B",
      display: "standalone",
      scope: "/",
      start_url: "/",
      orientation: "portrait",
      icons: [
        {
          src:"/icons/treadmark-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src:"/icons/treadmark-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src:"/icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
          purpose: "apple touch icon"
        },
        {
          src:"/icons/teardmark-225.png",
          sizes: "225x225",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src:"/icons/teardmark-144.png",
          sizes: "144x144",
          type: "image/png",
        }
      ]
    },
    devOptions: {
      enabled: true
    }
  })]
});