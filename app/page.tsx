"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function Home() {
  const { t } = useTranslation(["common"]);
  return (
    <div>
      <h1>{t("title", "Not found")}</h1>{" "}
    </div>
  );
}
