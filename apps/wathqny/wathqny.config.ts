import type { WathqnyConfig } from 'wtqdocs'

import CodeStyles from 'wtqdocs/block/styles?url'
import ThemeStyles from 'wtqdocs/styles?url'

const Config: WathqnyConfig = {
  logo: '/icon.svg',
  siteName: 'وثقني',
  OGImage: {
    src: '/og.png',
    alt: 'An image displaying text “Fruit UI” in a large, bold font above the text “a modular styling framework” in a smaller font. Both texts are centered in the image.',
  },
  description: 'fruit UI a modular styling framework',
  keywords: [
    'ui',
    'css',
    'html',
    'js',
    'framework',
    'library',
  ],
  sidebar: [
    {
      label: 'Getting started',
      id: 'getting-started',
    },
  ],
  navbar: {
    items: [
      {
        label: 'المستندات',
        href: '/docs/getting-started/overview',
      },
      {
        label: 'المدونة',
        href: '/blog',
      },
    ],
  },
  css: [
    {
      href: ThemeStyles,
      rel: 'stylesheet',
    },
    {
      href: CodeStyles,
      rel: 'stylesheet',
    },
  ],
}

export default Config
