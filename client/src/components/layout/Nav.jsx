import React, { useState } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Container } from "./Container";
import { DICT } from "../../data/translations";

export const Nav = ({ onToggleTheme, dark, lang, setLang, t, active }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#sobre", label: t("nav.sobre") },
    { href: "#cv", label: t("nav.cv") },
    { href: "#analises", label: t("nav.analises") },
    { href: "#contacto", label: t("nav.contacto") },
  ];

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold tracking-tight">
            {t("hero.title")}
          </a>

          <nav className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-6">
              {navItems.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    aria-current={active === i.href ? "page" : undefined}
                    className={`relative hover:underline underline-offset-4 ${
                      active === i.href ? "font-semibold" : ""
                    }`}
                  >
                    {i.label}
                    {active === i.href && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600 rounded-full" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={onToggleTheme}
              aria-label={t("ui.theme")}
              className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              {dark ? (
                <Sun className="w-4 h-4" aria-hidden />
              ) : (
                <Moon className="w-4 h-4" aria-hidden />
              )}
            </button>

            <button
              onClick={toggleLang}
              aria-label={t("ui.language")}
              className="px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              {DICT[lang].langLabel}
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="py-2 border-b border-neutral-200 dark:border-neutral-800"
              >
                {i.label}
              </a>
            ))}
            <div className="flex gap-2">
              <button
                onClick={onToggleTheme}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
              >
                {dark ? (
                  <Sun className="w-4 h-4" aria-hidden />
                ) : (
                  <Moon className="w-4 h-4" aria-hidden />
                )}
                <span>{t("ui.theme")}</span>
              </button>
              <button
                onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
              >
                <Globe className="w-4 h-4" aria-hidden />
                <span>{DICT[lang].langLabel}</span>
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
