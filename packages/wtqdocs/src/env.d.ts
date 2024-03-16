/// <reference types="astro/client" />
/// <reference types="vite-plugin-pwa/info" />
/// <reference types="vite-plugin-pwa/pwa-assets" />

declare global {
   interface categoryItem {
    name: string;
    items: category;
  }

  type category = Array<string | categoryItem>;

  interface WathqnyConfigI {
    siteName?: string;
    description?: string;
    keywords?: string[];
    sidebar?: category;
    image?: string;
    category?: any;
    darkMode?: boolean;
    locale?: string;
    locale_dir: "ltr" | "rtl";
    cssPath: string[];
    navbar?: {
      brand: {
        name: string;
        logo: string;
      };
      Items: { href?: string; item?: string }[];
    };
  }
}
