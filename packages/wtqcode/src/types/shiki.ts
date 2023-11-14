import type * as shiki from "shiki";

export interface ShikiType {
  /** The code to highlight. Required. */
  code: string;
  /**
   * The language of your code.
   * Supports all languages listed here: https://github.com/shikijs/shiki/blob/main/docs/languages.md#all-languages
   * Instructions for loading a custom language: https://github.com/shikijs/shiki/blob/main/docs/languages.md#supporting-your-own-languages-with-shiki
   *
   * @default "plaintext"
   */
  lang?: shiki.Lang | shiki.ILanguageRegistration;
  /**
   * The styling theme.
   * Supports all themes listed here: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
   * Instructions for loading a custom theme: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
   *
   * @default "github-dark"
   */
  theme?: shiki.IThemeRegistration;
  /**
   * Enable word wrapping.
   *  - true: enabled.
   *  - false: disabled.
   *  - null: All overflow styling removed. Code will overflow the element by default.
   *
   * @default false
   */
  wrap?: boolean | null;
  /**
   * Generate inline code element only, without the pre element wrapper.
   *
   * @default false
   */
  inline?: boolean;
}
