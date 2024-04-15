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
      name: "Getting started",
      id: "Getting-started",
      href: "/",
    },
    {
      name: "components",
      id: "Components",
      href: "/components",
      items: [
        {
          name: "base",
          id: "base",
          href: "/components/base",
        },
        {
          name: "other",
          id: "other",
          href: "/components/other",
        },
        {
          name: "awesome",
          id: "awesome",
          href: "/components/awesome",
        },
      ],
    },
    {
      name: "Layout",
      id: "Layout",
      href: "/Layout",
    },
    {
      name: "utilities",
      id: "utilities",
      href: "/utilities",
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
    {
      href: "/src/css/docs.css",
    },
    {
      href: "/src/css/wathqny.css",
    },
  ],
};

export default Config;
