// src/data/posts.js
export const posts = [
  {
    id: "dxy-2025",
    slug: "dxy-2025",
    title: {
      pt: "Análise ao DXY 2025",
      en: "DXY 2025 Analysis",
    },
    date: "2025-08-31",
    summary: {
      pt: "Análise histórica, técnica e fundamental ao DXY.",
      en: "Historical, technical and fundamental analysis of DXY.",
    },
    tags: ["DXY", "Macroeconomia"],
    // tipo de conteúdo: "react" (renderiza componente), "pdf" (abre PDF), "html" (renderiza HTML), "external" (link)
    type: "react",
    component: () => import("../posts/DXY2025.jsx"), // lazy import
  },
  {
    id: "portfolios-2025",
    slug: "portfolios-2025",
    title: {
      pt: "Portfólios Conservadores 2025",
      en: "Conservative Portfolios 2025",
    },
    date: "2025-08-31",
    summary: {
      pt: "Três cenários com simulação a 20 anos.",
      en: "Three scenarios with 20-year simulation.",
    },
    tags: ["Investimento"],
    type: "react",
    component: () => import("../posts/Portfolios2025.jsx"),
  },
  // Exemplo para PDF:
  // {
  //   id: "nota-dxy-pdf",
  //   slug: "nota-dxy-pdf",
  //   title: { pt: "Nota DXY (PDF)", en: "DXY Note (PDF)" },
  //   date: "2025-08-31",
  //   summary: { pt: "Versão em PDF.", en: "PDF version." },
  //   tags: ["PDF"],
  //   type: "pdf",
  //   src: "/analises/dxy-2025.pdf"
  // },
  // Externo:
  // { id:"ext", slug:"ext", title:{pt:"Externo"}, date:"2025-08-31", summary:{pt:""}, tags:["link"], type:"external", href:"https://..." }
];
