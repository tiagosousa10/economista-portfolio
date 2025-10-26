// Função para formatar datas localizadas
export function fmtDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang === "pt" ? "pt-PT" : "en-GB", {
      dateStyle: "medium",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
