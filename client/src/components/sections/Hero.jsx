import React from "react";
import { Download, Newspaper, Linkedin, Github } from "lucide-react";
import { Container } from "./Container";
import { links } from "../../data/links";

export const Hero = ({ t }) => (
  <section className="pt-10 pb-8 bg-gradient-to-b from-blue-50 to-white dark:from-neutral-950 dark:to-neutral-900">
    <Container>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-blue-700 dark:text-blue-400">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-200">
            {t("hero.blurb")}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href={links.cv}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
              rel="nofollow noopener"
            >
              <Download className="w-4 h-4" aria-hidden />{" "}
              {t("hero.downloadCV")}
            </a>
            <a
              href="#analises"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              <Newspaper className="w-4 h-4" aria-hidden />{" "}
              {t("hero.viewAnalyses")}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              <Linkedin className="w-4 h-4" aria-hidden /> LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              <Github className="w-4 h-4" aria-hidden /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
