import { i18nOptions } from "@/libs/i18n-next/i18n-config";
import common from "@/locales/en/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      common: typeof common;
    };
  }
}
