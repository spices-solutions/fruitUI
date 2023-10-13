import type * as shiki from "shiki";

interface Props {
  code: string;
  lang?: shiki.Lang | shiki.ILanguageRegistration;
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
   * @default false */
   
  inline?: boolean;
}