import type { WathqnyConfig } from 'wtqtypes'

import CodeStyles from 'wtqcode/styles?url'
import ThemeStyles from 'wtqdocs/styles?url'
import fruitStyles from '/src/docs.scss?url'

const Config: WathqnyConfig = {
  logo: '/icon.svg',
  siteName: 'fruitUI',
  OGImage: {
    src: '/og.png',
    alt: '',
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
    ThemeStyles,
    CodeStyles,
    fruitStyles
  ],
}

export default Config
