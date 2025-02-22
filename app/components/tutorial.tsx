import { useTranslation } from "@/libs/i18n-next/use-translation";
import { CopyToClipBoardButton } from "@/components/copy-to-clipboard-button/copy-to-clipboard-button";

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

  const config = JSON.stringify(
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
  );

  return (
    <section className="my-32 dark:bg-[rgb(11,12,13)] bg-gray-50 p-4">
      <h2 className="text-2xl mb-8 text-center font-mono lowercase font-bold">
        {t("tutorial.title")}
      </h2>

      <div className="grid grid-cols-1 gap-12">
        <div>
          <TutorialStepTitle title={t("stepOne")} />

          <TutorialDescription description={t("stepOne.description")} />

          <div
            className="text-sm my-12 dark:bg-[rgb(14,15,16)] bg-gray-100 p-4 rounded-2xl"
            dir="ltr"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-mono text-gray-500">{`myelin.config.json`}</p>

              <CopyToClipBoardButton text={config} />
            </div>
            <code>
              <pre>{config}</pre>
            </code>
          </div>
        </div>
        <div>
          <TutorialStepTitle title={t("stepTwo.title")} />

          <TutorialDescription description={t("stepTwo.description")} />

          <div
            className="text-sm my-12 dark:bg-[rgb(14,15,16)] bg-gray-100 p-4 rounded-2xl"
            dir="ltr"
          >
            <p className="font-mono text-gray-500 mb-2">{`.env`}</p>
            <code>
              <pre>
                <span className="dark:text-gray-400 text-gray-600">{`AI_API_KEY=`}</span>
                <span className="dark:text-pink-400 text-pink-500">
                  sk-proj-your-api-key
                </span>
              </pre>
            </code>
          </div>
        </div>
        <div>
          <TutorialStepTitle title={t("stepThree.title")} />

          <TutorialDescription description={t("stepThree.description")} />

          <div
            className="text-sm my-12 dark:bg-[rgb(14,15,16)] bg-gray-100 p-4 rounded-2xl flex justify-between items-center"
            dir="ltr"
          >
            <code>
              <pre>
                <span className="text-gray-800 dark:text-gray-300">{`> npx myelin.dev@latest translate`}</span>
              </pre>
            </code>

            <CopyToClipBoardButton text={"npx myelin.dev@latest translate"} />
          </div>

          <p>{t("stepThree.explanation")}</p>
        </div>
      </div>
    </section>
  );
};
