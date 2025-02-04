import { useTranslation } from "@/libs/i18n-next/use-translation";

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h4 className="font-bold uppercase font-mono">{title}</h4>

      <p className="font-extralight mt-2 dark:text-gray-400">{description}</p>
    </div>
  );
}

export const Features = () => {
  const { t } = useTranslation(["features"]);

  return (
    <section className="my-32">
      <h2 className="text-2xl mb-8 text-center font-mono uppercase font-bold">
        {t("feature.title")}
      </h2>

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
    </section>
  );
};
