// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: './packages/ui/dist/js',
    lib: {
      entry: resolve(__dirname, './packages/ui/src/index.ts'),
      // name: 'fruitUI',
      fileName: 'fruit',
      formats: ["es","cjs","umd"],
    },
  },
  plugins: [dts({
    insertTypesEntry: true
  })],
})

