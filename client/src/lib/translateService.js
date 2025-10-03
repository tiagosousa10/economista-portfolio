// src/lib/translateService.js
const DEFAULT_ENDPOINT = "/api/translate"; // <— em vez de https://translate.argosopentech.com
const CACHE_KEY = "autoTranslations_v1";

function getCache() {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); }
  catch { return {}; }
}
function setCache(obj) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(obj)); } catch {}
}
function keyHash(text, src, tgt) {
  return `${src}::${tgt}::${text}`;
}

export async function autoTranslate(text, srcLang, targetLang) {
  try {
    if (!text || srcLang === targetLang) return text;
    const cache = getCache();
    const k = keyHash(text, srcLang, targetLang);
    if (cache[k]) return cache[k];

    const res = await fetch(DEFAULT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: String(text), source: srcLang, target: targetLang }),
    });

    const data = await res.json();
    const translated = data?.translatedText;

    if (typeof translated === "string" && translated.trim().length > 0) {
      cache[k] = translated;
      setCache(cache);
      return translated;
    }
    return text;
  } catch (e) {
    console.error("[translateService] Error:", e);
    return text;
  }
}
