import type { WathqnyConfig } from 'wtqtypes'

import CodeStyles from 'wtqdocs/block/styles?url'
import ThemeStyles from 'wtqdocs/styles?url'
import fruitStyles from '/src/docs.scss?url'

const Config: WathqnyConfig = {
  logo: '/icon.svg',
  siteName: 'fruitUI',
  OGImage: {
    src: '/og.png',
    alt: 'An image displaying text “Fruit UI” in a large, bold font above the text “a modular styling framework” in a smaller font. Both texts are centered in the image.',
  },
  description: 'fruit UI a modular styling framework',
  keywords: [
    'fruitUI',
    'fruit',
    'ui',
    'css',
    'html',
    'js',
    'framework',
    'library',
    'components',
  ],
  sidebar: [
    {
      label: 'Getting started',
      id: 'getting-started',
    },
    {
      label: 'Components',
      id: 'components',
    },
    {
      label: 'Layout',
      id: 'layout',
    },
    {
      label: 'Utilities',
      id: 'utilities',
    },
  ],
  navbar: {
    items: [
      {
        label: 'Docs',
        href: '/docs/getting-started/overview',
      },
      {
        label: 'Blog',
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
    {
      href: fruitStyles,
      rel: 'stylesheet',
    }
  ],
}

export default Config
