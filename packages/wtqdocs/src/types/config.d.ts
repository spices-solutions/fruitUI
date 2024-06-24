
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
}

export type { WathqnyConfig }
