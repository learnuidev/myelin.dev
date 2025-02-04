import { useTranslation } from "@/libs/i18n-next/use-translation";
import { motion } from "framer-motion";

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const featureVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={featureVariants}
      className="dark:bg-[rgb(14,15,16)] bg-gray-100 p-4 rounded-2xl"
    >
      <h4 className="font-bold uppercase font-mono">{title}</h4>

      <p className="mt-2 dark:text-gray-500">{description}</p>
    </motion.div>
  );
}

export const Features = () => {
  const { t } = useTranslation(["features"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="my-32 dark:bg-[rgb(11,12,13)] bg-gray-50 p-4"
    >
      <motion.h2 className="text-2xl mb-8 text-center font-mono uppercase font-bold">
        {t("feature.title")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <FeatureItem
          title={t("feature.private")}
          description={t("feature.private.description")}
        />
        <FeatureItem
          title={t("feature.openSource")}
          description={t("feature.openSource.description")}
        />
        <FeatureItem
          title={t("feature.free")}
          description={t("feature.free.description")}
        />
        <FeatureItem
          title={t("feature.multiModel")}
          description={t("feature.multiModel.description")}
        />
        <FeatureItem
          title={t("feature.byom")}
          description={t("feature.byom.description")}
        />
        <FeatureItem
          title={t("feature.firstClassi18n")}
          description={t("feature.firstClassi18n.description")}
        />
        <FeatureItem
          title={t("feature.nameSpaceSupport")}
          description={t("feature.nameSpaceSupport.description")}
        />
      </div>
    </motion.section>
  );
};
