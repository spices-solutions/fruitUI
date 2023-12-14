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
  favicon: "/fruitUI.png",
  image: "/fruitUI.png  ",
  description: "fruit UI a moduler styling framework",
  sidebar: ["intro", "components", "layout"],
  navbar: {
    brand: {
      logo: "/fruitUI.png",
      name: "fruitUI",
    },
    Items: [
      {
        item: "docs",
        href: "/docs",
      },
      {
        item: "blog",
        href: "/blog",
      },
    ],
  },
};

export default WathqnyConfig;
