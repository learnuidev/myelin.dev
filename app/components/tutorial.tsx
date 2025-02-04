import { useTranslation } from "@/libs/i18n-next/use-translation";

function TutorialStepTitle({ title }: { title: string }) {
  return <h4 className="font-bold uppercase font-mono">{title}</h4>;
}

function TutorialDescription({ description }: { description: string }) {
  return (
    <p className="font-extralight mt-2 dark:text-gray-400">{description}</p>
  );
}

export const Tutorial = () => {
  const { t } = useTranslation(["tutorial"]);

  return (
    <section className="my-32">
      <h2 className="text-2xl mb-8 text-center font-mono uppercase font-bold">
        {t("tutorial.title")}
      </h2>

      <div className="grid grid-cols-1 gap-12">
        <div>
          <TutorialStepTitle title={t("stepOne")} />

          <TutorialDescription description={t("stepOne.description")} />

          <div className="text-sm my-12 dark:bg-[rgb(21,22,23)] bg-gray-100 py-2 px-2">
            <p className="font-mono text-gray-500 mb-2">{`myelin.config.json`}</p>
            <code>
              <pre>
                {JSON.stringify(
                  {
                    aiProvider: "deepseek",
                    aiModel: "deepseek-chat",
                    locale: {
                      location: "locales",
                      sourceLanguage: "en",
                      targetLanguages: ["es", "fr", "zh", "zh-TW", "en-US"],
                    },
                  },
                  null,
                  4
                )}
              </pre>
            </code>
          </div>
        </div>
        <div>
          <TutorialStepTitle title={t("stepTwo.title")} />

          <TutorialDescription description={t("stepTwo.description")} />

          <div className="text-sm my-12 dark:bg-[rgb(21,22,23)] bg-gray-100 py-2 px-2">
            <p className="font-mono text-gray-500 mb-2">{`.env`}</p>
            <code>
              <pre>
                <span className="text-gray-400">{`AI_API_KEY=`}</span>
                <span className="text-pink-400">sk-proj-your-api-key</span>
              </pre>
            </code>
          </div>
        </div>
        <div>
          <TutorialStepTitle title={t("stepThree.title")} />

          <TutorialDescription description={t("stepThree.description")} />

          <div className="text-sm my-12 dark:bg-[rgb(21,22,23)] bg-gray-100 py-2 px-2">
            <code>
              <pre>
                <span className="text-gray-800 dark:text-gray-300">{`> npx myelino --translate`}</span>
              </pre>
            </code>
          </div>

          <p>{t("stepThree.explanation")}</p>
        </div>
      </div>
    </section>
  );
};
