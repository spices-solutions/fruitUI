import { defineConfig, passthroughImageService } from 'astro/config'
import { shikiBaseTransformers, wathqnyPlugin } from 'wtqdocs/plugin'
import WathqnyConfig from './wathqny.config'

// https://astro.build/config
export default defineConfig({
  site: 'https://fruit-ui.vercel.app/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'material-theme-lighter',
        dark: 'material-theme-darker',
      },
      transformers: [...shikiBaseTransformers()],
    },
  },
  integrations: [...wathqnyPlugin(WathqnyConfig)],
})
