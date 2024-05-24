/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxBracketSameLine: false,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-astro-organize-imports',
    '@trivago/prettier-plugin-sort-imports',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
}

export default config
