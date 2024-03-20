type categoryItem = {
  name: string
  items: category
}

type category = Array<string | categoryItem>

type WathqnyConfig = {
siteName?: string;
description?: string;
keywords?: string[];
sidebar?: category;
image?: string;
category?: any;
darkMode?: boolean;
locale?: string;
locale_dir: "ltr" | "rtl";
cssPath: string[];
navbar?: {
  brand: {
    name: string;
    logo: string;
  };
  Items: { href?: string; item?: string }[];
};
}

export {
  WathqnyConfig,
  category
}