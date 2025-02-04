"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Footer = () => {
  const { t } = useTranslation(["common"]);
  return (
    <footer className="flex justify-center my-8 text-xs text-gray-400 dark:text-gray-600">
      <p>{t("footer")}</p>
    </footer>
  );
};
