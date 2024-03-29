// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apito Docs',
  tagline: 'Develop API for Web and Mobile Apps. Build Instantly, Deploy in Seconds',
  url: 'https://apito.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sh0umik', // Usually your GitHub org/user name.
  projectName: 'apito-website-v2', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-149868545-2',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-52W9MN75ZP',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Apito Docs',
        logo: {
          alt: 'Apito Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs/',
            label: 'Index',
            position: 'left',
          },
          {
            to: 'docs/build-api-quick-start-guide',
            activeBasePath: 'docs/build-api-quick-start-guide',
            label: 'Getting Started',
            position: 'left',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://apito.io',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://app.apito.io',
            label: 'Apito Console',
            position: 'right',
          },
          {
            href: 'https://github.com/sh0umik/apito-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/build-api-quick-start-guide',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/apito',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4EmZYYQATb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/apito_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apito-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 40,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
