// src/components/T.jsx
import React, { useEffect, useState } from "react";
import { autoTranslate } from "../lib/translateService";

/**
 * T (Translate Fallback)
 * - Mostra sempre o texto base imediatamente (nunca fica em branco).
 * - Se houver 'official' e lang !== srcLang, usa 'official'.
 * - Caso contrário, tenta tradução automática (cache local).
 * - Suporta children não-texto (coerção para string).
 */

function textFromChildren(children) {
  if (children == null) return "";
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textFromChildren).join("");
  if (typeof children === "object" && children.props && children.props.children) {
    return textFromChildren(children.props.children);
  }
  try {
    return String(children);
  } catch {
    return "";
  }
}

export default function T({ children, srcLang = "pt", lang = "pt", official }) {
  const base = textFromChildren(children);
  const [text, setText] = useState(base);

  useEffect(() => {
    let mounted = true;

    (async () => {
      // mostra sempre o texto base imediatamente
      if (mounted) setText(base);

      if (!base) return;
      if (lang === srcLang) return;

      // tradução oficial manual tem prioridade
      if (official) {
        if (mounted) setText(official);
        return;
      }

      // fallback automático
      try {
        const t = await autoTranslate(base, srcLang, lang);
        if (mounted) setText(t || base);
      } catch (e) {
        console.error("[T] autoTranslate error:", e);
        if (mounted) setText(base);
      }
    })();

    return () => { mounted = false; };
  }, [base, srcLang, lang, official]);

  return <>{text}</>;
}
