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
  cssPath: ["./src/"],
  navbar: {
    brand: {
      logo: "/icon.svg",
      name: "fruitUI",
    },
    Items: [
      {
        item: "docs",
        href: "/docs/getting-started/overview",
      },
      {
        item: "blog",
        href: "/blog",
      },
    ],
  },
};

export default Config;
