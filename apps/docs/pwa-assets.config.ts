import { defineConfig } from '@vite-pwa/assets-generator/config'

import type { Preset } from '@vite-pwa/assets-generator/config';

export const minimal2023Preset: Preset = {
  transparent: {
    sizes: [64, 192, 512],
    favicons: [[48, 'favicon.ico']]
  },
  maskable: {
    sizes: [512]
  },
  apple: {
    sizes: [180]
  }
}

export default defineConfig({
  headLinkOptions: {
    preset: '2023'
  },
  preset: {
    ...minimal2023Preset,
    png: {
      
      compressionLevel: 9,
      quality: 85
    }
  },
  images: ['public/logo.svg']
})