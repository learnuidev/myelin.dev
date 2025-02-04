"use client";

import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import { copyTextToClipboard } from "@/libs/misc/copy-text-to-clipboard";
import { motion } from "framer-motion";

export function Banner() {
  const { t } = useTranslation(["common"]);
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  const ctaVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.1,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex items-center justify-center flex-col m-auto"
    >
      <motion.h3
        variants={titleVariants}
        className="text-center text-4xl sm:text-5xl mt-32 dark:text-gray-200"
      >
        {t("description")}
      </motion.h3>
      <motion.p
        variants={descriptionVariants}
        className="rounded-none text-lg mt-6 text-gray-500 max-w-3xl text-center font-mono"
      >
        {t("banner")}
      </motion.p>
      <motion.div variants={ctaVariants}>
        <div className="flex mt-8 border border-gray-200 dark:border-gray-600 rounded-full hover:shadow-lg dark:hover:shadow-gray-800 hover:shadow-gray-200 transition p-2 px-4 text-sm w-full font-mono">
          <button
            onClick={(event) => {
              event.preventDefault();

              copyTextToClipboard(`npx myelino --translate`).then(() => {
                toast({
                  title: t("copyToClipboard.title"),
                  description: t("copyToClipboard.description"),
                });
              });
            }}
            className="flex items-center space-x-2"
          >
            <span>
              {" "}
              npx <span className="text-pink-500">myelino</span> --translate
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
