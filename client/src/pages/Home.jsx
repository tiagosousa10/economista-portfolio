import React, { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Download,
  Mail,
  Linkedin,
  Github,
  FileText,
  Newspaper,
  User,
  Globe,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "../lib/axios";

// ==========================
// Website — Vítor Reis — PRONTO A COLAR
// ==========================

const links = {
  email: "mailto:vitor17reis@gmail.com",
  linkedin: "https://www.linkedin.com/in/vítor-reis",
  github: "https://github.com/vitor17reis-macro",
  cv: "/cv.pdf",
  siteOrigin: typeof window !== "undefined" ? window.location.origin : "",
};

// Posts estáticos (fallback se não houver relatórios da API)
const postsBase = [
  {
    id: "dxy-analise-2025",
    isoDate: "2025-08-28",
    title: {
      pt: "Índice do Dólar Americano (DXY): Perspetivas e Riscos",
      en: "US Dollar Index (DXY): Outlook and Risks",
    },
    summary: {
      pt: "Análise completa do DXY: enquadramento histórico, tendências técnicas, correlações com ouro e VIX, fatores fundamentais e riscos futuros.",
      en: "Comprehensive analysis of the DXY: historical background, technical trends, correlations with gold and VIX, fundamentals and future risks.",
    },
    url: "/analises/dxy-2025",
    tags: ["DXY", "Macroeconomia"],
    lang: "pt",
  },
  {
    id: "portfolios-analise-2025",
    isoDate: "2025-08-31",
    title: {
      pt: "Investimento Conservador com Exposição a Tecnologia, Inteligência Artificial e Criptomoedas",
      en: "Conservative Investment with Exposure to Technology, Artificial Intelligence, and Cryptocurrencies",
    },
    summary: {
      pt: "Análise comparativa de três portfólios com diferentes perfis de risco, integrando ativos tradicionais e inovadores, com simulação de 20 anos.",
      en: "Comparative analysis of three portfolios with varying risk profiles, integrating traditional and innovative assets, with a 20-year simulation.",
    },
    url: "/analises/portfolios-2025",
    tags: ["Portfólios", "Criptomoedas", "Tecnologia"],
    lang: "pt",
  },
  {
    id: "public-debt-analise-2025",
    isoDate: "2025-09-03",
    title: {
      pt: "Dívida Pública Global: Tendências, Riscos e Sustentabilidade",
      en: "Global Public Debt: Trends, Risks and Sustainability",
    },
    summary: {
      pt: "Análise da evolução da dívida pública mundial com base nos dados do FMI, destacando projeções, riscos e sustentabilidade fiscal.",
      en: "Analysis of the evolution of global public debt based on IMF data, highlighting projections, risks, and fiscal sustainability.",
    },
    url: "/analises/public-debt-2025",
    tags: ["Dívida Pública", "Macroeconomia"],
    lang: "pt",
  },
];

const skills = [
  "Data Analysis (Stata, Excel)",
  "Macroeconomia & Regulação Financeira",
  "Política Monetária e Financeira",
  "Econometria e Cálculo Matemático",
  "Office (Word & Excel)",
  "Liderança & Inovação Tecnológica",
];

const languagesList = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "B1" },
  { name: "Espanhol", level: "B1" },
];

// --- I18N ---
const DICT = {
  pt: {
    brand: "Vítor Reis",
    nav: {
      sobre: "Sobre",
      cv: "CV",
      analises: "Notas de Realidade",
      contacto: "Contacto",
    },
    hero: {
      title: "Vítor Reis",
      blurb:
        "Sou um economista focado em macroeconomia, política monetária e análise de dados. Partilho semanalmente reflexões sobre a Zona Euro, Portugal e tendências globais.",
      downloadCV: "Descarregar CV",
      viewAnalyses: "Ver notas",
    },
    about: { title: "Sobre mim" },
    aboutText:
      "Tenho 24 anos e destaco-me pela disciplina, proatividade e persistência. Tenho particular interesse em análise de dados, economia financeira, regulação e política macroeconómica. Procuro aplicar um pensamento crítico e competências técnicas sólidas para interpretar fenómenos económicos complexos e contribuir para soluções práticas e fundamentadas.",
    cv: {
      title: "CV",
      education: "Educação",
      experience: "Experiência",
      skills: "Competências & Ferramentas",
      languages: "Idiomas",
      eduItems: [
        "Mestrado em Economia — FEP, Universidade do Porto (2023–Presente)",
        "Licenciatura em Economia — FEUC, Universidade de Coimbra (2019–2023)",
        "Erasmus+ — Universidade Autónoma de Madrid (2021–2022)",
      ],
      expItems: [
        "Assistente Administrativo — Ibermetais (mar. 2023 – set. 2023). Apoio à logística, controlo de stocks e departamento comercial.",
        "Estágio Curricular — M. Monteiro Serviços de Contabilidade (jul. 2022). Apoio à contabilidade e organização administrativa.",
      ],
      skillItems: [
        "Stata, Excel, Word",
        "Econometria aplicada, Análise de dados",
        "Raciocínio rápido, foco em resultados",
      ],
    },
    posts: {
      title: "Notas de Realidade",
      empty:
        "Ainda não há artigos publicados. Quando criar o primeiro, adicione um objeto no array `posts` com título, data, resumo e url.",
      readMore: "Ler mais",
    },
    contact: {
      title: "Contacto",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      placeholderName: "O seu nome",
      placeholderEmail: "nome@exemplo.pt",
      placeholderMsg: "Escreva a sua mensagem",
      send: "Enviar",
      orEmail: "ou enviar por email",
      sentOk: "Mensagem pronta para envio!",
      sentError: "Por favor, preencha todos os campos obrigatórios.",
    },
    footer: { top: "Topo", rights: "Todos os direitos reservados." },
    ui: { theme: "Tema", language: "Idioma" },
    langLabel: "PT",
  },
  en: {
    brand: "Vítor Reis",
    nav: {
      sobre: "About",
      cv: "CV",
      analises: "Reality Notes",
      contacto: "Contact",
    },
    hero: {
      title: "Vítor Reis",
      blurb:
        "I am an economist focused on macroeconomics, monetary policy, and data analysis. I share weekly insights on the Euro Area, Portugal, and global trends.",
      downloadCV: "Download CV",
      viewAnalyses: "View notes",
    },
    about: { title: "About me" },
    aboutText:
      "I am 24 years old and known for my discipline, proactivity, and persistence. I have a particular interest in data analysis, financial economics, regulation, and macroeconomic policy. I strive to apply critical thinking and solid technical skills to interpret complex economic phenomena and contribute to practical, well-grounded solutions.",
    cv: {
      title: "CV",
      education: "Education",
      experience: "Professional Experience",
      skills: "Skills & Tools",
      languages: "Languages",
      eduItems: [
        "MSc in Economics — FEP, University of Porto (2023–Present)",
        "BSc in Economics — FEUC, University of Coimbra (2019–2023)",
        "Erasmus+ — Universidad Autónoma de Madrid (2021–2022)",
      ],
      expItems: [
        "Administrative Assistant — Ibermetais (Mar 2023 – Sep 2023). Support in logistics, inventory control, and commercial department.",
        "Internship — M. Monteiro Accounting Services (Jul 2022). Support in accounting and administrative organization.",
      ],
      skillItems: [
        "Stata, Excel, Word",
        "Applied econometrics, Data analysis",
        "Fast reasoning, Results-oriented",
      ],
    },
    posts: {
      title: "Reality Notes",
      empty:
        "No posts yet. When you create the first one, add an object to the `posts` array with title, date, summary, and URL.",
      readMore: "Read more",
    },
    contact: {
      title: "Contact",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "name@example.com",
      placeholderMsg: "Write your message",
      send: "Send",
      orEmail: "or send by email",
      sentOk: "Message ready to send!",
      sentError: "Please fill in all required fields.",
    },
    footer: { top: "Top", rights: "All rights reserved." },
    ui: { theme: "Theme", language: "Language" },
    langLabel: "EN",
  },
};
// --- Helpers ---
const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, title, icon: Icon, children, altBg = false }) => (
  <section
    id={id}
    className={`scroll-mt-24 py-12 ${
      altBg ? "bg-neutral-50 dark:bg-neutral-900" : ""
    }`}
  >
    <Container>
      <div className="flex items-center gap-3 mb-6">
        {Icon ? <Icon className="w-5 h-5" aria-hidden /> : null}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </Container>
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 bg-white dark:bg-neutral-950 transition-[box-shadow,transform] motion-reduce:transition-none hover:shadow-lg hover:-translate-y-0.5">
    {children}
  </div>
);

// --- Hooks utilitários
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
}

// Tema (dark/light) com persistência
function useTheme() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useLocalStorage("theme_dark", prefersDark);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

// I18n simples
function useI18n() {
  const getInitial = () => {
    try {
      const p = new URLSearchParams(window.location.search).get("lang");
      if (p === "pt" || p === "en") return p;
    } catch {}
    try {
      const v = localStorage.getItem("lang");
      if (v) return v;
    } catch {}
    return "pt";
  };
  const [lang, setLang] = useLocalStorage("lang", getInitial());
  const t = (path) => {
    const parts = path.split(".");
    return (
      parts.reduce((acc, p) => (acc ? acc[p] : undefined), DICT[lang]) ?? path
    );
  };
  return { lang, setLang, t };
}

// SEO e html lang dinâmicos
function useHtmlLang(lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [lang]);
}

function ensureMetaName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function ensureMetaProp(prop, content) {
  let el = document.querySelector(`meta[property="${prop}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", prop);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function ensureLink(rel, href, hreflang) {
  const sel = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ""}`;
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function useSeo(lang, t) {
  useEffect(() => {
    const title = t("brand");
    const desc =
      lang === "pt"
        ? "Economista especializado em macroeconomia, política monetária e análise de dados. Análises semanais sobre a Zona Euro, Portugal e tendências globais."
        : "Economist focused on macroeconomics, monetary policy, and data analysis. Weekly insights on the Euro Area, Portugal, and global trends.";

    document.title = title;

    ensureMetaName("description", desc);
    ensureMetaProp("og:title", title);
    ensureMetaProp("og:description", desc);
    ensureMetaProp("og:type", "website");
    ensureMetaProp("og:image", "/og.jpg");
    ensureMetaName("twitter:card", "summary_large_image");
    ensureMetaName("twitter:title", title);
    ensureMetaName("twitter:description", desc);

    try {
      const origin = window.location.origin;
      ensureLink("canonical", origin + "/");
      ensureLink("alternate", origin + "/?lang=pt", "pt");
      ensureLink("alternate", origin + "/?lang=en", "en");
    } catch {}
  }, [lang, t]);
}

// JSON-LD Person
function useJsonLdPerson(lang) {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vítor Reis",
      url: typeof window !== "undefined" ? window.location.origin : "",
      sameAs: [links.linkedin, links.github],
      jobTitle: lang === "pt" ? "Economista" : "Economist",
    };
    let s = document.getElementById("ld-person");
    if (!s) {
      s = document.createElement("script");
      s.id = "ld-person";
      s.type = "application/ld+json";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(data);
  }, [lang]);
}

// Realce do link ativo na navegação (com debounce)
function useActiveSection() {
  const [active, setActive] = useState("#sobre");
  useEffect(() => {
    const sections = ["#sobre", "#cv", "#analises", "#contacto"];
    const onScroll = () => {
      let curr = "#sobre";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) curr = id;
      }
      setActive(curr);
    };
    let t;
    const handler = () => {
      clearTimeout(t);
      t = setTimeout(onScroll, 80);
    };
    onScroll();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return active;
}

// Util: formata datas localizadas
function fmtDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang === "pt" ? "pt-PT" : "en-GB", {
      dateStyle: "medium",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
const Nav = ({ onToggleTheme, dark, lang, setLang, t, active }) => {
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

const Hero = ({ t }) => (
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

const SecCV = ({ t }) => (
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

const SecAnalises = ({ t, lang, posts, relatorios, isLoading }) => (
  <Section id="analises" title={t("posts.title")} icon={Newspaper} altBg>
    {isLoading ? (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ) : relatorios.length === 0 && posts.length === 0 ? (
      <Card>
        <p className="text-sm text-neutral-700 dark:text-neutral-200">
          {t("posts.empty")}
        </p>
      </Card>
    ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Relatórios da API */}
        {relatorios.map((relatorio) => (
          <Card key={relatorio._id}>
            {relatorio.figuraUrl && (
              <div className="mb-4">
                <img
                  src={relatorio.figuraUrl}
                  alt={relatorio.titulo}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={relatorio.createdAt}>
                {fmtDate(relatorio.createdAt, lang)}
              </time>
            </div>
            <h3 className="font-medium leading-snug mb-2">
              {relatorio.titulo}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3">
              {relatorio.resumo}
            </p>
            <Link
              to={`/relatorio/${relatorio._id}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {t("posts.readMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}

        {/* Posts estáticos (fallback) */}
        {relatorios.length === 0 &&
          posts.map((p) => (
            <Card key={p.id}>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                <time dateTime={p.isoDate}>{fmtDate(p.isoDate, lang)}</time>
                {p.tags?.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800">
                    {p.tags[0]}
                  </span>
                )}
                {p.lang && (
                  <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800">
                    {p.lang.toUpperCase()}
                  </span>
                )}
              </div>
              <h3 className="font-medium leading-snug mb-2">
                {typeof p.title === "string"
                  ? p.title
                  : p.title[lang] || p.title.pt || p.title.en}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3">
                {typeof p.summary === "string"
                  ? p.summary
                  : p.summary[lang] || p.summary.pt || p.summary.en}
              </p>
              <Link
                to={p.url}
                className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {t("posts.readMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
      </div>
    )}
  </Section>
);

const SecContacto = ({ t, lang }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  }); // honeypot
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.company) return; // bot honeypot
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    const subject =
      (lang === "pt" ? "Contacto via site — " : "Website contact — ") +
      form.name;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:vitor17reis@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contacto" title={t("contact.title")} icon={Mail}>
      <Card>
        <form
          className="grid gap-4 md:grid-cols-2"
          onSubmit={handleSubmit}
          noValidate
          aria-live="polite"
        >
          <div className="md:col-span-1">
            <label htmlFor="name" className="block text-sm mb-1">
              {t("contact.name")}
            </label>
            <input
              id="name"
              name="name"
              required
              aria-invalid={status === "error" && !form.name ? true : undefined}
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("contact.placeholderName")}
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="md:col-span-1">
            <label htmlFor="email" className="block text-sm mb-1">
              {t("contact.email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              aria-invalid={
                status === "error" && !form.email ? true : undefined
              }
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("contact.placeholderEmail")}
              value={form.email}
              onChange={onChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm mb-1">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              aria-invalid={
                status === "error" && !form.message ? true : undefined
              }
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("contact.placeholderMsg")}
              value={form.message}
              onChange={onChange}
            />
          </div>
          {/* Honeypot */}
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={onChange}
          />
          <div className="md:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950"
            >
              {t("contact.send")}
            </button>
            <a
              href={links.email}
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
            >
              <Mail className="w-4 h-4" aria-hidden /> {t("contact.orEmail")}
            </a>
            {status === "ok" && (
              <span className="text-sm text-green-600 dark:text-green-400">
                {t("contact.sentOk")}
              </span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-600 dark:text-red-400">
                {t("contact.sentError")}
              </span>
            )}
          </div>
        </form>
      </Card>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <a
          href={links.linkedin}
          target="_blank"
          rel="me noopener noreferrer"
          className="underline underline-offset-4"
        >
          LinkedIn
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="me noopener noreferrer"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        <a href={links.email} className="underline underline-offset-4">
          Email
        </a>
      </div>
    </Section>
  );
};

const Footer = ({ t }) => (
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
