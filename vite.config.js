// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: '',
    lib: {
      entry: resolve(__dirname, ''),
      // name: 'fruitUI',
      fileName: (fromat) => `index.${fromat}.js`,
      formats: ["es","umd"],
    },
  },
  plugins: [dts({
    insertTypesEntry: true
  })],
})

