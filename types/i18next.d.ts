import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import common from "@/locales/en/common.json";
import features from "@/locales/en/features.json";
import footer from "@/locales/en/footer.json";
import tutorial from "@/locales/en/tutorial.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      common: typeof common;
      features: typeof features;
      footer: typeof footer;
      tutorial: typeof tutorial;
    };
  }
}

