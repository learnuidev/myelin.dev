"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Footer = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <footer className="flex justify-center my-8 text-xs text-gray-400 dark:text-gray-600">
      <p>{t("copyright")}</p>
    </footer>
  );
};
