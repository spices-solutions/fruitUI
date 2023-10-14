import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      optimize: true,
      shikiConfig: { theme: 'css-variables' },
    }),
    partytown(),
    prefetch(),
    sitemap(),
  ],
});