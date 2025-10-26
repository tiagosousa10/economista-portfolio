import { useEffect } from "react";

// Hook para SEO dinâmico
export function useSeo(lang, t) {
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

// Funções auxiliares para SEO
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
