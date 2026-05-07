// @ts-check

const repository = process.env.GITHUB_REPOSITORY || 'your-github-org/jtrinity-docs-site';
const [githubOwner, githubRepo] = repository.split('/');
const isUserOrOrgPage = githubRepo?.endsWith('.github.io');
const siteUrl = process.env.SITE_URL || `https://${githubOwner}.github.io`;
const siteBaseUrl = process.env.BASE_URL || (isUserOrOrgPage ? '/' : `/${githubRepo}/`);
const repositoryUrl = `https://github.com/${githubOwner}/${githubRepo}`;

const config = {
  title: 'J-TRINITY C4ISR',
  tagline: 'Educational doctrine library for simulation-only advisory study.',
  favicon: 'img/favicon.svg',

  url: siteUrl,
  baseUrl: siteBaseUrl,
  organizationName: githubOwner,
  projectName: githubRepo,
  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'md',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: undefined,
          numberPrefixParser: false,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/docs',
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/jtrinity-social-card.svg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: 'description',
          content:
            'J-TRINITY C4ISR educational documentation website. SIMULATION_ONLY, ADVISORY_ONLY, HUMAN_FINAL.',
        },
      ],
      navbar: {
        title: 'J-TRINITY',
        logo: {
          alt: 'J-TRINITY mark',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'doctrineSidebar',
            position: 'left',
            label: 'Doctrine',
          },
          {to: '/docs/diagrams', label: 'Diagrams', position: 'left'},
          {to: '/docs/glossary', label: 'Glossary', position: 'left'},
          {
            href: repositoryUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Study',
            items: [
              {label: 'Doctrine Library', to: '/docs/parts/00-j-trinity-c4isr'},
              {label: 'Conceptual Diagrams', to: '/docs/diagrams'},
              {label: 'Glossary', to: '/docs/glossary'},
            ],
          },
          {
            title: 'Boundaries',
            items: [
              {label: 'SIMULATION_ONLY', to: '/docs/glossary#simulation_only'},
              {label: 'ADVISORY_ONLY', to: '/docs/glossary#advisory_only'},
              {label: 'HUMAN_FINAL', to: '/docs/glossary#human_final'},
            ],
          },
        ],
        copyright:
          'Educational documentation only. SIMULATION_ONLY / ADVISORY_ONLY / HUMAN_FINAL. No backend, no Firebase, no real-world control features.',
      },
      prism: {
        theme: require('prism-react-renderer').themes.vsDark,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
};

module.exports = config;
