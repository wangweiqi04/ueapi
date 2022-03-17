module.exports = {
  title: "Unreal接口文档",
  tagline: "让开发更轻松",
  url: "https://runletapp.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "runletapp",
  projectName: "runletapp.github.io",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
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
          to: "docs",
          activeBasePath: "docs",
          label: "文档",
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
              label: "文档",
              to: "docs",
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
      copyright: `Copyright © ${new Date().getFullYear()} Runlet. All rights reserved.`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/runletapp/website/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/runletapp/website/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        googleAnalytics: {
          trackingID: "UA-132764481-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
};
