import Logo from "./components/Logo";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import React from "react";

export default {
  logo: <Logo />,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();

    const url =
      "https://studium.aktamirov.de" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta
          property="og:title"
          content={frontMatter.title || "Prüfungsvorbereitung"}
        />
        <meta
          property="og:description"
          content={frontMatter.description || "Thema"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/z4roc/tisem1_docs",
  },
  i18n: [{ locale: "de", text: "Deutsch" }],
  docsRepositoryBase: "https://github.com/z4roc/tisem1_docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Bachelorstudium Informatik HS Albsig",
    };
  },
  footer: {
    text: "Bachelorstudium Informatik HS Albsig",
  },
  toc: {
    title: "Auf dieser Seite",
    backToTop: true,
  },
  editLink: {
    text: "Diese Seite bearbeiten",
  },
  feedback: {
    content: "Fragen? Gib mir Feedback!",
  },
  search: {
    placeholder: "Dokumentation durchsuchen",
  },
  // ... other theme options
};
