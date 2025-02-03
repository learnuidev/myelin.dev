"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// import { getCookie, setCookie } from '@/domain/cookie/cookieUtils'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { i18nConfig, Language, LANGUAGES } from './settings'
import { useTranslation } from "./use-translation";
import { getCookie, setCookie } from "./cookie-utils";
import { i18nConfig, Language, LANGUAGES } from "./i18n-config";

export function LanguageSwitcher() {
  const locale = getCookie(i18nConfig.cookieName) as Language;
  const [selectedItem, setSelectedItem] = useState<Language>(
    locale || i18nConfig.fallbackLanguage
  );
  const router = useRouter();
  const { i18n } = useTranslation("common");
  const handleChange = async (value: Language) => {
    const newLocale = value;
    setSelectedItem(newLocale);
    // set cookie for next-i18n-router
    await i18n.changeLanguage(newLocale, () => {
      setCookie(i18nConfig.cookieName, newLocale);
    });

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <div className="relative size-7">
            {LANGUAGES[selectedItem].language}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {i18nConfig.languages.map((item) => {
          return (
            <DropdownMenuItem
              key={item}
              className="flex items-center gap-2"
              onClick={() => handleChange(item)}
            >
              <div className="relative size-5">
                <p>{LANGUAGES[item].language}</p>
              </div>
              <span
                className={cn("text-xs", {
                  "font-semibold": item === selectedItem,
                })}
              >
                {LANGUAGES[item].language}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
