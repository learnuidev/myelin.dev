import { i18nConfig } from "./i18n-config";
import { dir } from "i18next";

import { cookies } from "next/headers";

export const getLocaleAndDirection = async () => {
  const locale = (await cookies()).get(i18nConfig.cookieName)?.value;
  const direction = dir(locale);

  return {
    locale,
    direction,
  };
};
