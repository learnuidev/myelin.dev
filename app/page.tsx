"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { copyTextToClipboard } from "@/libs/misc/copy-text-to-clipboard";
import { Features } from "./components/features";

export default function Home() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-center flex-col m-auto">
        <p className="text-center text-4xl sm:text-5xl mt-32 dark:text-gray-200">
          {t("description")}
        </p>
        <h3 className="rounded-none mt-6 dark:text-gray-400 max-w-3xl text-center font-mono">
          {t("banner")}
        </h3>
        <div>
          <div className="flex mt-8 border border-dashed border-muted-foreground p-2 px-4 text-sm w-full relative">
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
      <Features />
    </div>
  );
}
