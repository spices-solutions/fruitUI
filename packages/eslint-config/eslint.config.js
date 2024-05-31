import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import perfectionist from 'eslint-plugin-perfectionist'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    plugins: {
      perfectionist,
    },
  },

  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
]
