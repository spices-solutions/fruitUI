type WathqnyConfig = {
  siteName?: string;
  description?: string;
  keywords?: string[];
  sidebar?: {
    label: string;
    id?: string;
  }[];
  image?: string;
  category?: any;
  darkMode?: boolean;
  locale?: string;
  locale_dir: "ltr" | "rtl";
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
