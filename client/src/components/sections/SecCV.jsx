import React from "react";
import { FileText, Globe } from "lucide-react";
import { Section, Card } from "../layout/Container";
import { languagesList } from "../../data/skills";

export const SecCV = ({ t }) => (
  <Section id="cv" title={t("cv.title")} icon={FileText} altBg>
    <div className="grid md:grid-cols-3 gap-6">
      <Card>
        <h3 className="font-medium">{t("cv.education")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {t("cv.eduItems").map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium">{t("cv.experience")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {t("cv.expItems").map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium">{t("cv.skills")}</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {t("cv.skillItems").map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h3 className="font-medium flex items-center gap-2">
          <Globe className="w-4 h-4" aria-hidden />
          {t("cv.languages")}
        </h3>
        <ul className="mt-3 space-y-2 text-sm">
          {languagesList.map((lang) => (
            <li
              key={lang.name}
              className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-1"
            >
              <span>{lang.name}</span>
              <span className="text-neutral-500">{lang.level}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </Section>
);
