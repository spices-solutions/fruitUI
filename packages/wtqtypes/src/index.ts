type WathqnyConfig = {
  siteName?: string;
  description?: string;
  keywords?: string[];
  sidebar?: {
    label: string;
    id?: string;
  }[];
  OGImage?: string;
  OGImageAlt: string;
  css?: string[];
  navbar?: {
    brand: {
      name: string;
      logo: string;
    };
    Items: { href?: string; item?: string }[];
  };
};

export type { WathqnyConfig };
