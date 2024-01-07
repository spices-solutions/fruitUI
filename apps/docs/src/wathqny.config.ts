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
  favicon: "/treadmark.svg",
  image: "/cover.png",
  description: "fruit UI a modular styling framework",
  sidebar: ["Getting-started", "Components", "Layout", "Utilites"],
  navbar: {
    brand: {
      logo: "../assets/treadmark.svg",
      name: "fruitUI",
    },
    Items: [
      {
        item: "docs",
        href: "/docs/intro/overview",
      },
    ],
  },
};

export default WathqnyConfig;
