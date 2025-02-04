"use client";
import { LanguageSwitcher } from "@/libs/i18n-next/language-switcher";
import { ToggleTheme } from "../toggle-theme/toggle-theme";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import Link from "next/link";

export const NavBar = () => {
  const { t } = useTranslation(["common"]);
  return (
    <nav className="p-8 flex justify-between items-center">
      <Link className="font-bold text-2xl lowercase" href="/">
        {t("title")}
      </Link>
      <div className="flex space-x-4 items-center flex-row">
        <ToggleTheme />

        <LanguageSwitcher />
      </div>
    </nav>
  );
};
