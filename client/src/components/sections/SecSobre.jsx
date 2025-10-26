import React from "react";
import { User } from "lucide-react";
import { Section, Card, Container } from "../layout/Container";
import { skills } from "../../data/skills";

export const SecSobre = ({ t }) => (
  <Section id="sobre" title={t("about.title")} icon={User}>
    <Container>
      <Card>
        <p className="text-sm leading-7 text-neutral-800 dark:text-neutral-200">
          {t("aboutText")}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800"
            >
              {s}
            </span>
          ))}
        </div>
      </Card>
    </Container>
  </Section>
);
