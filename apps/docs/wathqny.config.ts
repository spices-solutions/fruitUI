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
	favicon: "/icon.svg",
	image: "/cover.png",
	description: "fruit UI a modular styling framework",
	sidebar: ["Getting-started", "Components", "Layout", "Utilities"],
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
		],
	},
};

export default WathqnyConfig;
