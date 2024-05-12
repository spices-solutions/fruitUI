import type { WathqnyConfig } from "wtqtypes";

const Config: WathqnyConfig = {
  siteName: "fruitUI",
  OGImage: "/og.png",
  OGImageAlt: "",
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
    "/src/docs.scss",
    "wtqdocs/styles" // npm
  ],
};

export default Config;
