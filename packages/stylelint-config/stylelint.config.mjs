import defineConfig from "stylelint-define-config"

export default defineConfig({
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order",
    "stylelint-config-sass-guidelines"
  ],
  cache: true,
})

