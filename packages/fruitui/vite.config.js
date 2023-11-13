// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    sourcemap: true,
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "./src/ts/index.ts"),
      name: 'fruitUI',
      fileName: "index",
      formats: ["es", "umd","iife"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
