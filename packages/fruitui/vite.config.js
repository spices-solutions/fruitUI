// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    sourcemap: true,
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "./src/ts/index.ts"),
      name: 'index',
      fileName: "index",
      formats: ["es", "umd"],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
