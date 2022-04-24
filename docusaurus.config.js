module.exports = {
  title: "D3OS接口文档",
  tagline: "让开发更轻松",
  url: "https://wangweiqi04.github.io",
  baseUrl: "/ueapi.github.io/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",
  favicon: "img/favicon.ico",
  organizationName: "wangweiqi04",
  projectName: "ueapi.github.io",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/runlet.png",
    navbar: {
      hideOnScroll: true,
      title: "D3OS接口文档",
      logo: {
        alt: "D3OS接口文档",
        src: "img/logo_dark.png",
        srcDark: "img/logo_white.png",
      },
      items: [
        {
          activeBasePath: "docs/guide",
          label: "Guide",
          position: "left",
          to: "docs/guide/js",
        },
        {
          activeBasePath: "docs/api",
          label: "API Reference",
          position: "left",
          to: "docs/api/classes",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "资源",
          items: [
            {
              label: "Guide",
              to: "docs/guide/js",
            },
            {
              label: "API Reference",
              to: "docs/api/classes",
            },
          ],
        },
      ],
      copyright: `Copyright ©海尔数字科技（上海）有限公司版权所有`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh", "en"],
      },
    ],
  ],
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
