"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { copyTextToClipboard } from "@/libs/misc/copy-text-to-clipboard";

export default function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex items-center justify-center flex-col max-w-4xl m-auto">
      <h1 className="text-center text-5xl mt-32 font-bold font-geist-sans">
        {t("title", "Not found")}
      </h1>{" "}
      <p className="text-center text-2xl dark:text-gray-400">
        {t("description")}
      </p>
      <h3 className="rounded-none mt-12 text-xl">{t("startAutomating")}</h3>
      <div>
        <div className="flex mt-4 border border-dashed border-muted-foreground p-2 px-4 text-sm w-full relative">
          <button
            onClick={() => {
              copyTextToClipboard(`npx myelino --translate`).then(() => {
                alert("Copied to clipboard");
              });
            }}
            className="flex items-center space-x-2 overflow-hidden"
          >
            <span className="text-primary truncate">
              npx myelino --translate
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
