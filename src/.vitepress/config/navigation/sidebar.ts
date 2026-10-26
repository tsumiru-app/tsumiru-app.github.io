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
        {
          text: 'Tsumiru and WebUI',
          link: '/docs/compare/',
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
          text: 'Coming from Mihon or Komikku',
          link: '/docs/guides/migrate-from-mihon',
        },
        {
          text: 'Install on iOS (sideloading)',
          link: '/docs/guides/install-ios',
        },
        {
          text: 'Browse: sources & extensions',
          link: '/docs/guides/browse-and-extensions',
        },
        {
          text: 'Extension stores',
          link: '/docs/guides/adding-sources',
        },
        {
          text: 'Reader settings',
          link: '/docs/guides/reader-settings',
        },
        {
          text: 'Keyboard shortcuts',
          link: '/docs/guides/keyboard-shortcuts',
        },
        {
          text: 'Using Tsumiru in a browser',
          link: '/docs/guides/web-browser',
        },
        {
          text: 'Reaching your server from anywhere',
          link: '/docs/guides/remote-access',
        },
        {
          text: 'Offline reading',
          link: '/docs/guides/offline-reading',
        },
        {
          text: 'Notifications',
          link: '/docs/guides/notifications',
        },
        { text: 'Categories', link: '/docs/guides/categories' },
        { text: 'Tracking', link: '/docs/guides/tracking' },
        { text: 'Migrate manga between sources', link: '/docs/guides/source-migration' },
        { text: 'Backups', link: '/docs/guides/backups' },
        { text: 'Server administration', link: '/docs/guides/server-administration' },
        {
          text: 'Sync your library and progress',
          link: '/docs/guides/sync',
        },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting/',
          collapsed: true,
          items: [
            {
              text: 'Common issues',
              link: '/docs/guides/troubleshooting/common-issues',
            },
            {
              text: 'Diagnosis',
              link: '/docs/guides/troubleshooting/diagnosis',
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
