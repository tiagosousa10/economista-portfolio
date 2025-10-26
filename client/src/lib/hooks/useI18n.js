import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { DICT } from "../../data/translations";

// Hook para internacionalização (i18n)
export function useI18n() {
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
