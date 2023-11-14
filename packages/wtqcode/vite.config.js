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
      entry: [
        resolve(__dirname, "./src/hooks.ts"),
        resolve(__dirname, "./src/index.ts"),
      ],
      formats: ["es"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: false,
    }),
  ],
});
