import React, { useEffect, useMemo, useState } from "react";
import { api } from "../lib/axios";

// Hooks customizados
import {
  useTheme,
  useI18n,
  useHtmlLang,
  useSeo,
  useJsonLdPerson,
  useActiveSection,
} from "../lib/hooks";

// Componentes
import {
  Nav,
  Hero,
  SecSobre,
  SecCV,
  SecAnalises,
  SecContacto,
  Footer,
} from "../components";

// Dados estáticos
import { postsBase } from "../data";

export default function EconomistaSiteBase() {
  const { dark, setDark } = useTheme();
  const { lang, setLang, t } = useI18n();
  const active = useActiveSection();
  const [relatorios, setRelatorios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useHtmlLang(lang);
  useSeo(lang, t);
  useJsonLdPerson(lang);

  // Buscar relatórios da API
  useEffect(() => {
    const fetchRelatorios = async () => {
      try {
        const response = await api.get("api/relatorios");
        console.log("🚀 ~ fetchRelatorios ~ response:", response);
        if (response.data.success) {
          setRelatorios(response.data.relatorio);
        }
      } catch (error) {
        console.log("Erro ao carregar relatórios:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatorios();
  }, []);

  // Filtra posts conforme idioma com fallback
  const posts = useMemo(() => {
    const arr = [...postsBase];
    // ordena por data desc
    return arr.sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Skip to content (acessibilidade) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-neutral-900 text-white px-3 py-2 rounded"
      >
        {lang === "pt" ? "Saltar para o conteúdo" : "Skip to content"}
      </a>

      <Nav
        onToggleTheme={() => setDark((d) => !d)}
        dark={dark}
        lang={lang}
        setLang={setLang}
        t={t}
        active={active}
      />

      <main id="main">
        <Hero t={t} />
        <SecSobre t={t} />
        <SecCV t={t} />
        <SecAnalises
          t={t}
          lang={lang}
          posts={posts}
          relatorios={relatorios}
          isLoading={isLoading}
        />
        <SecContacto t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </div>
  );
}
