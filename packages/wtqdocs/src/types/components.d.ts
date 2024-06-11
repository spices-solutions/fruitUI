interface LayoutInterface {
  title?: string
  description?: string
  OGImage?: {
    src: string
    alt: string
  }
  keywords?: string | string[]
}

export type { LayoutInterface }
