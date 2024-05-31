import defineConfig from 'stylelint-define-config'

export default defineConfig({
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],

  rules: {
    'color-function-notation': null,
  },
  cache: true,
})
