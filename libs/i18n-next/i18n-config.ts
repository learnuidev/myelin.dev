import { FormatFunction } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export const LANGUAGES = {
  en: {
    language: "English (UK)",
    flag: ``,
  },
  ar: {
    language: "العربية",
    flag: ``,
  },
  "en-US": {
    language: "English (US)",
    flag: ``,
  },
  de: {
    language: "Deutsch",
    flag: ``,
  },
  ja: {
    language: "日本語",
    flag: ``,
  },
  // Add your supported locales here
} as const;

export type Language = keyof typeof LANGUAGES;

export const i18nConfig = {
  cookieName: "I18N_COOKIE",
  fallbackLanguage: "en",
  defaultNamespace: "common",
  languages: Object.keys(LANGUAGES) as Language[],
};

const customFormat: FormatFunction = (value, format) => {
  if (format === "capitalize") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
};

export const i18nOptions = {
  // debug: true,
  supportedLngs: i18nConfig.languages,
  fallbackLng: i18nConfig.fallbackLanguage,
  lng: i18nConfig.fallbackLanguage,
  fallbackNS: i18nConfig.defaultNamespace,
  defaultNS: i18nConfig.defaultNamespace,
  ns: [i18nConfig.defaultNamespace],
  interpolation: {
    escapeValue: false, // React already does escaping
    format: customFormat,
    skipOnVariables: false,
  },

  backend: {
    backends: [
      resourcesToBackend(
        (lng: string, ns: string) => import(`/locales/${lng}/${ns}.json`)
      ),
    ],
    backendOptions: [],
  },
};
