import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import AstroPWA from '@vite-pwa/astro'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import purgecss from 'astro-purgecss'
import { defineConfig } from 'astro/config'
import Wathqny from './wathqny.config'

// https://astro.build/config
export default defineConfig({
  site: 'https://fruit-ui.vercel.app/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  integrations: [
    AutoImport({
      imports: [
        {
          'astro:assets': ['Image'],
          'wtqdocs': ['BrowserBlock', 'Code'],
        },
      ],
    }),
    mdx({
      optimize: true,
      shikiConfig: {
        themes: {
          light: 'material-theme-lighter',
          dark: 'material-theme-darker',
        },
        transformers: [
          transformerNotationDiff(),
          transformerNotationFocus(),
          transformerMetaHighlight(),
          transformerNotationWordHighlight(),
          transformerNotationErrorLevel(),
          transformerMetaWordHighlight(),
        ],
      },
    }),
    sitemap(),
    purgecss(),
    AstroPWA({
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      registerType: 'autoUpdate',
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
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      manifest: {
        name: Wathqny.siteName,
        description: Wathqny.description,
        theme_color: '#18181B',
        background_color: '#fff',
        display: 'standalone',
        scope: '/',
        base: '/',
        orientation: 'portrait',
      },
    }),
    metaTags(),
    icon({
      iconDir: 'src/assets/icons',
    }),
    compressor({
      gzip: true,
      brotli: false,
    }),
  ],
})
