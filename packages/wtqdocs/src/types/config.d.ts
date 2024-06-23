import type { ShikiTransformer } from "shiki"
type themeType = BuiltinTheme | ThemeRegistration | ThemeRegistrationRaw

type WathqnyConfig = {
  logo: string
  siteName?: string
  description?: string
  keywords?: string[]
  sidebar?: {
    label: string
    id?: string
  }[]
  OGImage?: {
    src: string
    alt: string
  }
  css?: {
    href: string
    rel?: string
    onload?: string
    media?: string
    as?: string
  }[]
  navbar?: {
    items: { href?: string; label?: string }[]
  }
  highlighter: {
    shikiConfig: {
      themes: {
        light: themeType,
        dark: themeType,
      },
      transformers: ShikiTransformer[],
    },
  },
}

export type { WathqnyConfig }
