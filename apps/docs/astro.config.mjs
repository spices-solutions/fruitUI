import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [ mdx({
    optimize: true,
    shikiConfig: {
      theme: 'material-theme'
    }
  }), partytown(), sitemap()]
});