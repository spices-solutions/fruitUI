import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [  mdx(), partytown(), prefetch(), sitemap()]
});