import type { WathqnyConfig } from "wtqtypes"

const Config: WathqnyConfig = {
  siteName: "fruitUI",
  image: "/og.png",
  description: "fruit UI a modular styling framework",
  keywords: [
    "fruitUI",
    "fruit",
    "ui",
    "css",
    "html",
    "js",
    "framework",
    "library",
    "components",
  ],
  locale: "en",
  locale_dir: "ltr",
  darkMode: true,
  category: ["Getting-started", "Components", "Layout", "Utilities"],
  sidebar: [
    "Getting-started",
    {
      name: "components",
      items: ["base", "other", "awesome"],
    },
    "Layout",
    "Utilities",
  ],
  navbar: {
    brand: {
      logo: "/icon.svg",
      name: "fruitUI",
    },
    Items: [
      {
        item: "Docs",
        href: "/docs/getting-started/overview",
      },
      {
        item: "Blog",
        href: "/blog",
      },
    ],
  },
    css: [
    {
      href: "/src/css/docs.css",
    },
    {
      href: "/src/css/wathqny.css",
    },
  ],
};

export default Config;
