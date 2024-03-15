interface WathqnyConfigI {
	siteName?: string;
	description?: string;
	keywords?: string[];
	image?: string;
	category?: string[];
  darkMode?: boolean;
	locale?: string;
  locale_dir: "ltr" | "rtl";
  cssPath: string[]
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
	image: "/og.png",
	description: "fruit UI a modular styling framework",
  keywords: ["fruitUI", "fruit", "ui", "css", "html", "js", "framework", "library","components"],
	locale: "en",
  locale_dir: "ltr",
  darkMode: true,
	category: ["Getting-started", "Components", "Layout", "Utilities"],
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

export default WathqnyConfig;
