import React from "react";
import { Container } from "../layout/Container";

export const Footer = ({ t }) => (
  <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-700 dark:text-neutral-300">
    <Container>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          © {new Date().getFullYear()} Vítor Reis — Porto, PT.{" "}
          {t("footer.rights")}
        </div>
        <div className="flex items-center gap-4">
          <a href="#sobre" className="underline underline-offset-4">
            {t("footer.top")}
          </a>
          <a href="#analises" className="underline underline-offset-4">
            {t("nav.analises")}
          </a>
          <a href="#contacto" className="underline underline-offset-4">
            {t("nav.contacto")}
          </a>
        </div>
      </div>
    </Container>
  </footer>
);
