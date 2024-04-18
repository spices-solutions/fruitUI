import type { WathqnyConfig } from "wtqtypes";

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
    {
      label: "Getting started",
      id: "getting-started",
    },
    {
      label: "Components",
      id: "components",
    },
    {
      label: "Layout",
      id: "layout",
    },
    {
      label: "Utilities",
      id: "utilities",
    },
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
    "/src/docs.scss"
  ],
};

export default Config;
