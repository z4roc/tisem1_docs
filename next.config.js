const withNextra = require("nextra")({
  latex: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
