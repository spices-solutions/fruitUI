import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from "eslint-config-prettier";



export default [
  {languageOptions: { globals: globals.browser }},
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
];
