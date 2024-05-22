/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-plugin-defensive-css",
    "stylelint-order",
    "@double-great/stylelint-a11y"
  ],
  rules: {
    "block-no-empty": true,
  },
};
