const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ExinPool Support',
  tagline: 'ExinPool User manual Documents',
  url: 'https://support.exinone.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'ExinPool', // Usually your GitHub org/user name.
  projectName: 'support.exinpool.com', // Usually your repo name.
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      'en': {
        label: 'English',
      },
      'zh-CN': {
        label: '简体中文',
      }
    }
  },
  themeConfig: {

    navbar: {
      title: 'ExinPool Support',
      logo: {
        alt: 'ExinPool Support',
        src: 'images/logo.png',
      },
      items: [
        {to: '/docs/introduction', label: 'Docs', position: 'left'},
        {
          href: 'https://developers.exinone.com',
          label: 'Developers',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ExinOne',
          items: [
            {
              label: 'Developers',
              href: 'https://developers.exinone.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
             label: 'Mixin Network',
              href: 'https://mixin.one/',
            },
            {
              label: 'MixPay',
              href: 'https://mixpay.me/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExinPool`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.docs.js'),
          path: 'docs',
          routeBasePath: '/docs',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      },
    ],
  ],
};
