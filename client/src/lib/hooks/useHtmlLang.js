import { useEffect } from "react";

// Hook para definir idioma do HTML dinamicamente
export function useHtmlLang(lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [lang]);
}
