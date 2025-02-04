"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { copyTextToClipboard } from "@/libs/misc/copy-text-to-clipboard";

export function Banner() {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex items-center justify-center flex-col m-auto">
      <p className="text-center text-4xl sm:text-5xl mt-32 dark:text-gray-200">
        {t("description")}
      </p>
      <h3 className="rounded-none mt-6 dark:text-gray-400 max-w-3xl text-center font-mono">
        {t("banner")}
      </h3>
      <div>
        <div className="flex mt-8 border border-gray-200 dark:border-gray-600 rounded-full hover:shadow-lg dark:hover:shadow-gray-800 hover:shadow-gray-200 transition p-2 px-4 text-sm w-full font-mono">
          <button
            onClick={() => {
              copyTextToClipboard(`npx myelino --translate`).then(() => {
                alert("Copied to clipboard");
              });
            }}
            className="flex items-center space-x-2"
          >
            <span> npx myelino --translate</span>
          </button>
        </div>
      </div>
    </div>
  );
}
