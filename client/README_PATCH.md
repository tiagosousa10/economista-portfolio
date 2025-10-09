# Patch: Tradução automática (LibreTranslate) + Fix EN Toggle

Este pacote inclui:
- `src/lib/translateService.js` — serviço de tradução com cache (usa `/api/translate` por omissão).
- `src/components/T.jsx` — componente `<T>` para fallback de tradução automática.
- `src/pages/DXY2025.jsx` — página adaptada para usar `<T>` e **renderizar o artigo sem condicional por idioma**.
- `api/translate.js` — proxy no Vercel para evitar CORS. Define `LT_ENDPOINT` se quiseres apontar para outra instância.

## Como aplicar

1. Copia estas pastas/ficheiros para o teu projeto, preservando caminhos:
```
/src/lib/translateService.js
/src/components/T.jsx
/src/pages/DXY2025.jsx
/api/translate.js
```

2. Garante que na tua app o `DXY2025.jsx` é a versão deste patch (o artigo deixa de estar envolvido por `{lang === "pt" && (...)}`).

3. (Opcional) No Vercel:
   - `LT_ENDPOINT` → URL base da tua instância LibreTranslate (por defeito usa https://translate.argosopentech.com).
   - Se preferires chamar diretamente a instância (sem proxy), define `VITE_LT_ENDPOINT` e remove/ignora `api/translate.js`.

4. Git rápido (no teu repo):
```bash
git add src/lib/translateService.js src/components/T.jsx src/pages/DXY2025.jsx api/translate.js
git commit -m "feat(i18n): auto-translate fallback + proxy and EN toggle fix"
git push
```

## Notas

- O `<T>` espera **texto simples** como `children`. Evita `<strong>`, `<em>` etc. dentro do `<T>`. Se precisares mesmo de formatação inline, podemos evoluir o componente.
- A primeira tradução de cada parágrafo pode demorar ~0.5–1s; fica em cache no `localStorage` (chave `autoTranslations_v1`).
- SEO multilíngua requer build-time i18n. Isto é um fallback runtime para UX.
