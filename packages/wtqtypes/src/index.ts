type WathqnyConfig = {
  logo: string;
  siteName?: string;
  description?: string;
  keywords?: string[];
  sidebar?: {
    label: string;
    id?: string;
  }[];
  OGImage?: {
    src: string
    alt: string
  }
  css?: string[];
  navbar?: {
    items: { href?: string; label?: string }[];
  };
};

export type { WathqnyConfig };
