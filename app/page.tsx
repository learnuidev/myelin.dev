"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export async function copyTextToClipboard(text: string) {
  if (navigator.clipboard) {
    // Use the Clipboard API for modern browsers
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        return null;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  } else {
    return null;
    // Fallback for older browsers
  }
}

export default function Home() {
  const { t } = useTranslation(["common"]);
  const { toast } = useToast();
  return (
    <div className="flex items-center justify-center flex-col max-w-4xl m-auto">
      <h1 className="text-center text-5xl mt-32 font-bold font-geist-sans">
        {t("title", "Not found")}
      </h1>{" "}
      <p className="text-center text-2xl dark:text-gray-400">
        {t("description")}
      </p>
      <Button className="rounded-none mt-12">{t("startAutomating")}</Button>
      <div>
        <div className="flex mt-12 border border-dashed border-muted-foreground p-2 px-4 text-sm w-full relative">
          <button
            type="button"
            onClick={() => {
              copyTextToClipboard(`npx myelino --translate`).then(() => {
                // alert("Copied to clipboard");
                toast({
                  description: "Copied to clipboard!",
                });
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
