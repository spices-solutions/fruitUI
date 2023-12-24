interface WathqnyConfigI {
  siteName?: string;
  description?: string;
  keywords?: string[];
  favicon?: string;
  image?: string;
  sidebar?: string[];
  navbar?: {
    brand: {
      name: string;
      logo: string;
    };
    Items: { href?: string; item?: string }[];
  };
}

const WathqnyConfig: WathqnyConfigI = {
  siteName: "fruitUI",
  favicon: "/favicon.png",
  image: "/assets/cover.png",
  description: "fruit UI a moduler styling framework",
  sidebar: ["intro", "components", "layout", "utilites"],
  navbar: {
    brand: {
      logo: "./assets/icon.svg",
      name: "FruitUI",
    },
    Items: [
      {
        item: "docs",
        href: "/docs/intro/overview",
      },
      {
        item: "blog",
        href: "/blog",
      },
    ],
  },
};

export default WathqnyConfig;
