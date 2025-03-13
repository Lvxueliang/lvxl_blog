// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lvxl',
  tagline: 'Love for Wx1n',
  favicon: 'img/favicon.ico',

  url: 'https://lvxueliang.github.io',    // 当前页面的url，setting里面 都可以看到部署后的url
  baseUrl: '/',   // 这里看自己需要添加，如果添加为/win/  访问主页就是 https://yingwinwin.github.io/win/
  organizationName: 'lvxueliang', // 这里是你github的名字
  projectName: 'lvxueliang.github.io', // 这个是你要部署到的github的项目名字
  deploymentBranch: "lv-pages",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: {
          blogSidebarTitle: '知识点',
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lvxl',
        logo: {
          alt: 'Lvxl Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          {to: '/docs', label: '前端知识库', position: 'left'},
          {to: '/java', label: '后端知识库', position: 'left'},
          {to: '/blog', label: '面试之道', position: 'left'},
          {to: '/question', label: '题目', position: 'left'},
          {
            href: 'https://github.com/Lvxueliang/lvxl_blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Lvxl',
            items: [
              {
                label: '学习之道',
                to: '/docs/index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                href: 'https://github.com/facebook/docusaurus',
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
    [ '@docusaurus/plugin-content-docs',
    { id: 'java' , path: 'java', routeBasePath: 'java', sidebarPath: require.resolve('./sidebars.js'), }
  ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'question',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'question',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './question',
        blogSidebarTitle: '题目详解',
        blogSidebarCount: 'ALL'
      },
    ],
  ],
};

module.exports = config;
