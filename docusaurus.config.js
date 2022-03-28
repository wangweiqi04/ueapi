module.exports = {
  title: "Unreal接口文档",
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
      title: "Unreal接口文档",
      logo: {
        alt: "Unreal接口文档",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          to: "docs/gameframework/classes",
          activeBasePath: "docs/gameframework",
          label: "GameFramework",
          position: "left",
        },
      ],
    },
    footer: {
      links: [
        // {
        //   title: "Runlet",
        //   items: [
        //     {
        //       label: "FAQ",
        //       to: "docs/faq",
        //     },
        //     {
        //       label: "Terms of Service",
        //       to: "docs/policies/terms",
        //     },
        //     {
        //       label: "Privacy Policy",
        //       to: "docs/policies/privacy",
        //     },
        //   ],
        // },
        {
          title: "资源",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GameFramework",
              to: "docs/gameframework/classes",
            },
            // {
            //   label: "Releases",
            //   href: "https://github.com/runletapp/runlet/releases",
            // },
          ],
        },
        // {
        //   title: "Social",
        //   items: [
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/runletapp/runlet",
        //     },
        //     {
        //       label: "Gitter",
        //       href: "https://gitter.im/runletapp",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/runletapp",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 海尔数字. All rights reserved.`,
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
          // editUrl: "https://github.com/runletapp/website/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // editUrl: "https://github.com/runletapp/website/edit/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
