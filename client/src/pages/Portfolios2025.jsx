// src/pages/Portfolios2025.jsx
import React, { useState } from "react";
import { ArrowLeft, Moon, Sun, Globe } from "lucide-react";
import T from "../components/T";
import { BlockMath, InlineMath, Katex } from "react-katex";
import "katex/dist/katex.min.css";
import { Container } from "postcss";

export default function Portfolios2025() {
  const [lang, setLang] = useState("pt");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translations = {
    pt: {
      title:
        "Investimento Conservador com Exposição a Tecnologia, Inteligência Artificial e Criptomoedas: Uma Análise de Cenários a Longo Prazo",
      date: "31/08/2025",
      resumoTitle: "Resumo",
      resumoText:
        "Esta análise comenta a viabilidade de integrar ativos tradicionais de baixo risco com instrumentos de inovação tecnológica e digital...",
      introTitle: "Introdução",
      introText:
        "Os portfólios conservadores são tradicionalmente concebidos...",
      revisaoTitle: "Revisão de Literatura",
      revisaoText:
        "A teoria moderna de portfólio, introduzida por Markowitz...",
      metodologiaTitle: "Metodologia",
      metodologiaText: "O Cenário A (Conservador), ilustrado na Figura 1...",
      fig1Caption: "Figura 1 - Cenário A",
      fig2Caption: "Figura 2 - Cenário B",
      fig3Caption: "Figura 3 - Cenário C",
      fig4Caption: "Figura 4 - Rentabilidade Média Anual (%)",
      volatilidadeTitle: "Volatilidade e Rácio de Sharpe",
      volatilidadeText: (
        <>
          <p>
            Adicionalmente, calcula-se o rácio de Sharpe para cada cenário,
            assumindo desvios-padrão históricos: 5,65% para A, 15,42% para B e
            22,39% para C, com taxa sem risco de 2%. A fórmula do rácio de
            Sharpe é dada por:
          </p>
          <BlockMath>
            {"\\text{Rácio de Sharpe} = \\frac{R_p - R_f}{\\sigma_p}"}
          </BlockMath>
          <p>
            onde <InlineMath>{"R_p"}</InlineMath> é o retorno esperado do
            portfólio, <InlineMath>{"R_f"}</InlineMath> é a taxa sem risco e{" "}
            <InlineMath>{"\\sigma_p"}</InlineMath> é o desvio padrão do
            portfólio (Sharpe, 1964).
          </p>
          <p>
            Os desvios-padrão históricos foram calculados como médias ponderadas
            das volatilidades anuais das classes de ativos, assumindo
            correlações moderadas entre classes. A fórmula aproximada usada é:
          </p>
          <BlockMath>{"\\sigma_p \\approx \\sum w_i \\sigma_i"}</BlockMath>
          <p>
            onde <InlineMath>{"\\sigma_p"}</InlineMath> é o desvio padrão do
            portfólio, <InlineMath>{"w_i"}</InlineMath> é o peso do ativo{" "}
            <InlineMath>{"i"}</InlineMath>, e{" "}
            <InlineMath>{"\\sigma_i"}</InlineMath> é o desvio padrão do ativo{" "}
            <InlineMath>{"i"}</InlineMath>. A fórmula exata, considerando
            correlações, é:
          </p>
          <BlockMath>
            {
              "\\sigma_p = \\sqrt{\\sum w_i^2 \\sigma_i^2 + \\sum \\sum w_i w_j \\sigma_i \\sigma_j \\rho_{ij}}"
            }
          </BlockMath>
        </>
      ),
      resultadosTitle: "Resultados",
      resultadosText:
        "Os cálculos ponderados apontam para retornos esperados de 3,58%...",
      fig5Caption: "Figura 5 - Valor Futuro Acumulado",
      tableTitle: "Tabela 1 - VF e Rácio de Sharpe",
      tableScenario: "Cenário",
      tableFutureValue: "Valor Futuro (€)",
      tableSharpeRatio: "Rácio de Sharpe",
      tableRow1Scenario: "A (Conservador)",
      tableRow1FutureValue: "174 883,63",
      tableRow1SharpeRatio: "0,2796",
      tableRow2Scenario: "B (Equilibrado)",
      tableRow2FutureValue: "240 845,61",
      tableRow2SharpeRatio: "0,2821",
      tableRow3Scenario: "C (Arriscado)",
      tableRow3FutureValue: "306 693,60",
      tableRow3SharpeRatio: "0,2827",
      discussaoTitle: "Discussão",
      discussaoText:
        "Os resultados confirmam que o Cenário A privilegia a segurança...",
      conclusaoTitle: "Conclusão",
      conclusaoText:
        "A análise comparativa dos três cenários de portfólio evidencia...",
      referencesTitle: "Referências",
      references:
        "Sharpe, W. F. (1964). Capital asset prices: A theory of market equilibrium...",
      notaRealidadeTitle: "Reality Note",
      notaRealidadeText:
        "These results are simplified projections and do not guarantee future performances...",
      backToAnalyses: "Return to previous page",
    },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900 dark"
          : "bg-gradient-to-b from-blue-50 to-white"
      } text-neutral-900 dark:text-neutral-100`}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="flex items-center justify-between h-16">
            <a
              href="/#analises"
              className="inline-flex items-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden />
              <T lang={lang} translations={translations}>
                {translations[lang].backToAnalyses}
              </T>
            </a>
            <div className="flex gap-3">
              <button
                onClick={() => setLang("pt")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 font-semibold transition-all ${
                  lang === "pt"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                <Globe className="w-4 h-4" aria-hidden /> PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 font-semibold transition-all ${
                  lang === "en"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                <Globe className="w-4 h-4" aria-hidden /> EN
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" aria-hidden />
                ) : (
                  <Moon className="w-4 h-4" aria-hidden />
                )}
                {isDarkMode ? "Light" : "Dark"}
              </button>
              <a
                href="/analises/portfolios-2025.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
              >
                📄 Download PDF
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Article content */}
      <section className="py-12">
        <Container>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-md">
            <article
              className="leading-relaxed text-lg text-neutral-900 dark:text-neutral-100"
              style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
            >
              <h1 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].title}
                </T>
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                <T lang={lang} translations={translations}>
                  {translations[lang].date}
                </T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].resumoTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].resumoText,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].introTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].introText,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].revisaoTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].revisaoText,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].metodologiaTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].metodologiaText,
                }}
              />

              <figure>
                <img
                  src="/images/portfolios/fig1.png"
                  alt={translations[lang].fig1Caption}
                  className="my-6 mx-auto rounded-lg shadow-md max-w-[50%]"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>
                    {translations[lang].fig1Caption}
                  </T>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/portfolios/fig2.png"
                  alt={translations[lang].fig2Caption}
                  className="my-6 mx-auto rounded-lg shadow-md max-w-[50%]"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>
                    {translations[lang].fig2Caption}
                  </T>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/portfolios/fig3.png"
                  alt={translations[lang].fig3Caption}
                  className="my-6 mx-auto rounded-lg shadow-md max-w-[50%]"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>
                    {translations[lang].fig3Caption}
                  </T>
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/portfolios/fig4.png"
                  alt={translations[lang].fig4Caption}
                  className="my-6 mx-auto rounded-lg shadow-md max-w-[50%]"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>
                    {translations[lang].fig4Caption}
                  </T>
                </figcaption>
              </figure>

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].volatilidadeTitle}
                </T>
              </h3>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].volatilidadeText,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].resultadosTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].resultadosText,
                }}
              />

              <figure>
                <img
                  src="/images/portfolios/fig5.png"
                  alt={translations[lang].fig5Caption}
                  className="my-6 mx-auto rounded-lg shadow-md max-w-[50%]"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>
                    {translations[lang].fig5Caption}
                  </T>
                </figcaption>
              </figure>

              <table className="table-auto border-collapse border border-neutral-200 dark:border-neutral-800 my-12 w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-900">
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableScenario}
                      </T>
                    </th>
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableFutureValue}
                      </T>
                    </th>
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableSharpeRatio}
                      </T>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow1Scenario}
                      </T>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow1FutureValue}
                      </T>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow1SharpeRatio}
                      </T>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow2Scenario}
                      </T>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow2FutureValue}
                      </T>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow2SharpeRatio}
                      </T>
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow3Scenario}
                      </T>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow3FutureValue}
                      </T>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <T lang={lang} translations={translations}>
                        {translations[lang].tableRow3SharpeRatio}
                      </T>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].discussaoTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].discussaoText,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].conclusaoTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].conclusaoText,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].referencesTitle}
                </T>
              </h2>
              <div
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].references,
                }}
              />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>
                  {translations[lang].notaRealidadeTitle}
                </T>
              </h2>
              <p
                className="mb-6"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].notaRealidadeText,
                }}
              />
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
