import { defineConfig, passthroughImageService } from 'astro/config'
import { wathqnyPlugin } from 'wtqdocs/plugin'
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
  integrations: [...wathqnyPlugin(WathqnyConfig)],
})
