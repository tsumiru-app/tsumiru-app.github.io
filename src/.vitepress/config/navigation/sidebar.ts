import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        {
          text: 'Reader settings',
          link: '/docs/guides/reader-settings',
        },
        {
          text: 'Offline reading',
          link: '/docs/guides/offline-reading',
        },
        { text: 'Categories', link: '/docs/guides/categories' },
        { text: 'Tracking', link: '/docs/guides/tracking' },
        { text: 'Backups', link: '/docs/guides/backups' },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting/',
          collapsed: true,
          items: [
            {
              text: 'Common issues',
              link: '/docs/guides/troubleshooting/common-issues',
            },
          ],
        },
      ],
    },
    {
      text: 'Frequently Asked Questions',
      items: [
        { text: 'General', link: '/docs/faq/general' },
        {
          text: 'Library',
          link: '/docs/faq/library',
        },
        {
          text: 'Reader',
          link: '/docs/faq/reader',
        },
        {
          text: 'Downloads',
          link: '/docs/faq/downloads',
        },
        {
          text: 'Settings',
          link: '/docs/faq/settings',
        },
        {
          text: 'Storage',
          link: '/docs/faq/storage',
        },
      ],
    },
  ]
}

export default sidebar
