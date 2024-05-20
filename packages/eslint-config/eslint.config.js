import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  js.configs.recommended,
  ...tseslint.configs.recommended,
];
