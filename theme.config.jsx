export default {
  logo: <span>Bachelorstudium Informatik HS Albsig</span>,
  project: {
    link: "https://github.com/z4roc",
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
