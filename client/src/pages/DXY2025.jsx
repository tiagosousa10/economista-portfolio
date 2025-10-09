import React, { useState } from "react";
import { ArrowLeft, Moon, Sun, Globe } from "lucide-react";
import T from "../components/T";

const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function DXY2025() {
  const [lang, setLang] = useState("pt");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translations = {
    pt: {
      title: "Índice do Dólar Americano (DXY)",
      date: "28/08/2025",
      intro: "O Índice do Dólar Americano — DXY — oferece uma medida fundamental para compreender a força relativa da moeda norte-americana face a uma cesta ponderada de moedas estrangeiras. Criado em 1973 no pós-Bretton Woods, corresponde a um valor médio ponderado do dólar relativamente ao euro, iene, libra, dólar canadiano, coroa sueca e franco suíço, sendo amplamente utilizado em análises cambiais e na avaliação da moeda enquanto ativo de reserva. Rogoff (1985) e Lothian (2006) discutem o seu papel histórico e limitam-se a considerar mudanças na composição do índice como eventos raros, mas relevantes para a interpretação dos movimentos no longo prazo.",
      historical: "Panorama Histórico e Tendências de Fundo",
      historicalText: "O gráfico histórico de longo prazo (Figura 1) evidencia os principais ciclos do DXY desde os anos 1970, com máximos significativos em 1985 (cerca de 160 pontos) e 2002 (~120 pontos), refletindo políticas monetárias restritivas e um fortalecimento económico dos EUA. O mínimo de 2008 (~70 pontos) ilustra o impacto da crise financeira global, seguido por uma estratégia monetária ultra-expansionista. Mais recentemente, nota-se um canal ascendente iniciado após 2011, indicando uma tendência estrutural de apreciação gradual do dólar, apesar da volatilidade conjuntural.",
      fig1Caption: "Figura 1: Gráfico Histórico do DXY (1967–2025)",
      technical: "Avaliação Técnica Atual",
      technicalText: "No presente, para além da trajetória de longo prazo, é crucial observar os movimentos no curto e médio prazo. O gráfico semanal (Figura 2), com médias móveis de 20, 50, 100 e 200 períodos, revela que o DXY tem oscilado dentro de um canal ascendente, com suporte firme na zona dos 97–98 pontos e a principal resistência em torno dos 120 pontos. Apesar da pressão descendente de curto prazo indicada pelas médias móveis, o canal permanece intacto, sugerindo que a tendência estrutural permanece válida.",
      technicalText2: "O gráfico diário (Figura 3) permite observar com mais detalhe a proximidade do suporte estrutural e a dinâmica dos indicadores técnicos. O Stochastic RSI encontra-se em zona neutra (cerca de 45), apontando para ausência clara de sobrecompra ou sobrevenda, enquanto o MACD indica um enfraquecimento ligeiro do momentum. No seu conjunto, os dados sugerem uma fase de consolidação, sem sinais inequívocos de reversão imediata ou aceleração.",
      fig2Caption: "Figura 2: Gráfico Semanal do DXY com Médias Móveis (2020–2025)",
      fig3Caption: "Figura 3: Gráfico Diário do DXY com Stochastic RSI e MACD (2025)",
      correlations: "Correlações com Ativos de Refúgio",
      correlationsText1: "As relações entre o DXY e outros ativos ajudam a compreender o comportamento do dólar em contextos de procura por segurança. O gráfico comparativo com o ouro (Figura 4) confirma uma correlação inversa clássica: períodos de apreciação significativa do ouro (2024–2025) coincidiram com movimentos descendentes ou estabilização do DXY, o que está de acordo com a literatura económica sobre a concorrência entre ativos de reserva (Zhang e Wei, 2010).",
      correlationsText2: "A correlação com o índice de volatilidade VIX (Figura 5) mostra o comportamento esperado do dólar enquanto 'porto seguro': em fases de stress global, onde o VIX eleva-se, o DXY tende a beneficiar devido à procura por ativos mais seguros (Habib e Stracca, 2012).",
      fig4Caption: "Figura 4: Correlação entre DXY e Ouro (2022–2025)",
      fig5Caption: "Figura 5: Correlação entre DXY e VIX (2022–2025)",
      fundamentals: "Fatores Fundamentais em Contexto",
      fundamentalsText: "Para além da análise técnica e das correlações, é essencial cruzar os dados com variáveis macroeconómicas e monetárias que moldam a trajetória do DXY. A política monetária do Fed (subidas ou cortes nas taxas de juro) continua a ser um dos principais motores de valorização ou enfraquecimento do índice. Engel e West (2005) destacam que os fundamentos como diferencial de taxas, inflação ou crescimento económico influenciam significativamente os movimentos cambiais, ainda que muitas vezes os preços pareçam evoluir de forma quase aleatória dentro de modelos de valor presente. Georgiadis (2016) evidencia que os impactos globais das políticas norte-americanas dependem fortemente da integração comercial e financeira, regime cambial e desenvolvimento de mercado dos países-recetores, o que pode reforçar ou mitigar os efeitos sobre o dólar. Por fim, Habib e Stracca (2012) dedicaram-se a identificar os fundamentos que conferem estatuto de 'safe-haven' às moedas, concluindo que a posição de ativos líquidos externos e tamanho do mercado acionista são determinantes robustas, mais do que simples spreads de juros.",
      risks: "Preocupações e Riscos Futuros",
      risksText: "Em 2025, o DXY enfrenta incertezas que podem moldar a sua trajetória a médio e longo prazo. A política monetária do Fed permanece um fator crítico, com expectativas de cortes adicionais nas taxas de juro, numa altura em que o crescimento económico dos EUA desacelera. Tal cenário pode intensificar a pressão descendente sobre o índice, que já registou a pior performance semestral desde 1991, testando suportes próximos de 98 pontos. Além disso, políticas comerciais agressivas, como tarifas impostas pelos EUA, podem reduzir o PIB e enfraquecer a confiança no dólar, enquanto a crescente desdolarização, com bancos centrais a diversificarem reservas para euros ou ouro, ameaça o estatuto de 'porto seguro' do dólar num contexto global multipolar. A volatilidade geopolítica, incluindo tensões comerciais EUA-China e eventos imprevisíveis como eleições ou crises regionais, amplifica os riscos.",
      tableConcern: "Preocupação",
      tableImpact: "Impacto Potencial no DXY",
      tableProbability: "Probabilidade Estimada",
      tableRow1Concern: "Cortes agressivos nas taxas do Fed",
      tableRow1Impact: "Enfraquecimento para <95 pontos",
      tableRow1Probability: "Alta (crescimento US lento)",
      tableRow2Concern: "Políticas comerciais e tarifas",
      tableRow2Impact: "Pressão descendente contínua",
      tableRow2Probability: "Média-Alta",
      tableRow3Concern: "Desdolarização global",
      tableRow3Impact: "Perda de estatuto a longo prazo",
      tableRow3Probability: "Média",
      conclusion: "Conclusão Integrada",
      conclusionText: "Em 2025, o DXY encontra-se num ponto crítico. Estruturalmente, continua a mover-se dentro de um canal ascendente; tecnicamente, aproxima-se do suporte forte em 97–98 pontos; fundamentalmente, enfrenta pressões contrárias — cortes possíveis nas taxas do Fed tendem a enfraquecê-lo, enquanto a instabilidade externa e o comportamento de refúgio fortalecem-no. A sua correlação com ouro e VIX reforça o papel de porto-seguro do dólar. Para o curto prazo, o valor de 97–98 pontos é decisivo: uma quebra sustentável pode indicar novo ciclo de fraqueza; a manutenção acima pode sinalizar retomada de valorização em direção a 105–110 pontos.",
      references: "Referências",
      backToAnalyses: "Voltar à pagina anterior",
    },
    en: {
      title: "U.S. Dollar Index (DXY)",
      date: "08/28/2025",
      intro: "The U.S. Dollar Index — DXY — provides a fundamental measure for understanding the relative strength of the U.S. dollar against a weighted basket of foreign currencies. Established in 1973 post-Bretton Woods, it represents a weighted average value of the dollar against the euro, yen, pound, Canadian dollar, Swedish krona, and Swiss franc, widely used in forex analysis and in assessing the currency as a reserve asset. Rogoff (1985) and Lothian (2006) discuss its historical role and consider changes in the index’s composition as rare but significant events for interpreting long-term movements.",
      historical: "Historical Overview and Long-Term Trends",
      historicalText: "The long-term historical chart (Figure 1) highlights the main cycles of the DXY since the 1970s, with significant peaks in 1985 (around 160 points) and 2002 (~120 points), reflecting restrictive monetary policies and U.S. economic strengthening. The 2008 low (~70 points) illustrates the impact of the global financial crisis, followed by an ultra-expansionary monetary strategy. More recently, an ascending channel has been observed since 2011, indicating a structural trend of gradual dollar appreciation despite cyclical volatility.",
      fig1Caption: "Figure 1: Historical DXY Chart (1967–2025)",
      technical: "Current Technical Assessment",
      technicalText: "Currently, beyond the long-term trajectory, it is crucial to observe short- and medium-term movements. The weekly chart (Figure 2), with moving averages of 20, 50, 100, and 200 periods, shows that the DXY has been oscillating within an ascending channel, with solid support at the 97–98 point zone and primary resistance around 120 points. Despite short-term downward pressure indicated by the moving averages, the channel remains intact, suggesting the structural trend remains valid.",
      technicalText2: "The daily chart (Figure 3) provides a closer look at the proximity to structural support and the dynamics of technical indicators. The Stochastic RSI is in a neutral zone (around 45), indicating no clear overbought or oversold conditions, while the MACD suggests a slight weakening of momentum. Overall, the data points to a consolidation phase, with no clear signs of immediate reversal or acceleration.",
      fig2Caption: "Figure 2: Weekly DXY Chart with Moving Averages (2020–2025)",
      fig3Caption: "Figure 3: Daily DXY Chart with Stochastic RSI and MACD (2025)",
      correlations: "Correlations with Safe-Haven Assets",
      correlationsText1: "The relationships between the DXY and other assets help understand the dollar’s behavior in contexts of demand for safety. The comparative chart with gold (Figure 4) confirms a classic inverse correlation: periods of significant gold appreciation (2024–2025) coincided with downward movements or stabilization of the DXY, consistent with economic literature on competition between reserve assets (Zhang and Wei, 2010).",
      correlationsText2: "The correlation with the VIX volatility index (Figure 5) shows the expected behavior of the dollar as a 'safe haven': during phases of global stress, when the VIX rises, the DXY tends to benefit due to demand for safer assets (Habib and Stracca, 2012).",
      fig4Caption: "Figure 4: Correlation between DXY and Gold (2022–2025)",
      fig5Caption: "Figure 5: Correlation between DXY and VIX (2022–2025)",
      fundamentals: "Fundamental Factors in Context",
      fundamentalsText: "Beyond technical analysis and correlations, it is essential to cross-reference data with macroeconomic and monetary variables shaping the DXY’s trajectory. The Fed’s monetary policy (rate hikes or cuts) remains a key driver of the index’s appreciation or weakening. Engel and West (2005) highlight that fundamentals such as rate differentials, inflation, or economic growth significantly influence exchange rate movements, although prices often seem to evolve almost randomly within present value models. Georgiadis (2016) shows that the global impacts of U.S. policies depend heavily on trade and financial integration, exchange rate regimes, and market development in recipient countries, which can amplify or mitigate effects on the dollar. Finally, Habib and Stracca (2012) focused on identifying fundamentals that confer 'safe-haven' status to currencies, concluding that the position of external liquid assets and stock market size are robust determinants, beyond mere interest rate spreads.",
      risks: "Concerns and Future Risks",
      risksText: "In 2025, the DXY faces uncertainties that could shape its medium- and long-term trajectory. The Fed’s monetary policy remains a critical factor, with expectations of additional rate cuts amid slowing U.S. economic growth. This scenario could intensify downward pressure on the index, which has already recorded its worst semiannual performance since 1991, testing supports near 98 points. Additionally, aggressive trade policies, such as U.S.-imposed tariffs, could reduce GDP and weaken confidence in the dollar, while growing dedollarization, with central banks diversifying reserves into euros or gold, threatens the dollar’s 'safe haven' status in a multipolar global context. Geopolitical volatility, including U.S.-China trade tensions and unpredictable events like elections or regional crises, amplifies risks.",
      tableConcern: "Concern",
      tableImpact: "Potential Impact on DXY",
      tableProbability: "Estimated Probability",
      tableRow1Concern: "Aggressive Fed rate cuts",
      tableRow1Impact: "Weakening to <95 points",
      tableRow1Probability: "High (slow U.S. growth)",
      tableRow2Concern: "Trade policies and tariffs",
      tableRow2Impact: "Continued downward pressure",
      tableRow2Probability: "Medium-High",
      tableRow3Concern: "Global dedollarization",
      tableRow3Impact: "Long-term loss of status",
      tableRow3Probability: "Medium",
      conclusion: "Integrated Conclusion",
      conclusionText: "In 2025, the DXY is at a critical juncture. Structurally, it continues to move within an ascending channel; technically, it approaches strong support at 97–98 points; fundamentally, it faces opposing pressures — possible Fed rate cuts tend to weaken it, while external instability and safe-haven behavior strengthen it. Its correlation with gold and VIX reinforces the dollar’s safe-haven role. In the short term, the 97–98 point level is decisive: a sustained break could signal a new cycle of weakness, while holding above could indicate a resumption of appreciation toward 105–110 points.",
      references: "References",
      backToAnalyses: "Return to previous page",
    },
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? "bg-gradient-to-b from-neutral-950 to-neutral-900 dark" : "bg-gradient-to-b from-blue-50 to-white"
    } text-neutral-900 dark:text-neutral-100`}>
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="flex items-center justify-between h-16">
            <a href="/#analises" className="inline-flex items-center gap-2 font-semibold">
              <ArrowLeft className="w-4 h-4" aria-hidden />
              <T lang={lang} translations={translations}>{translations[lang].backToAnalyses}</T>
            </a>
            <div className="flex gap-3">
              <button
                onClick={() => setLang("pt")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 font-semibold transition-all ${
                  lang === "pt" ? "bg-blue-600 text-white" : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                <Globe className="w-4 h-4" aria-hidden /> PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 font-semibold transition-all ${
                  lang === "en" ? "bg-blue-600 text-white" : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-blue-100 dark:hover:bg-blue-900"
                }`}
              >
                <Globe className="w-4 h-4" aria-hidden /> EN
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
              >
                {isDarkMode ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
                {isDarkMode ? "Light" : "Dark"}
              </button>
              <a
                href="/analises/dxy-2025.pdf"
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
                <T lang={lang} translations={translations}>{translations[lang].title}</T>
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                <T lang={lang} translations={translations}>{translations[lang].date}</T>
              </p>

              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].intro}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].historical}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].historicalText}</T>
              </p>
              <figure>
                <img
                  src="/images/dxy/fig1.png"
                  alt={translations[lang].fig1Caption}
                  className="my-6 mx-auto rounded-lg shadow-md"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig1Caption}</T>
                </figcaption>
              </figure>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].technical}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].technicalText}</T>
              </p>
              <figure>
                <img
                  src="/images/dxy/fig2.png"
                  alt={translations[lang].fig2Caption}
                  className="my-6 mx-auto rounded-lg shadow-md"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig2Caption}</T>
                </figcaption>
              </figure>

              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].technicalText2}</T>
              </p>
              <figure>
                <img
                  src="/images/dxy/fig3.png"
                  alt={translations[lang].fig3Caption}
                  className="my-6 mx-auto rounded-lg shadow-md"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig3Caption}</T>
                </figcaption>
              </figure>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].correlations}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].correlationsText1}</T>
              </p>
              <figure>
                <img
                  src="/images/dxy/fig4.png"
                  alt={translations[lang].fig4Caption}
                  className="my-6 mx-auto rounded-lg shadow-md"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig4Caption}</T>
                </figcaption>
              </figure>

              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].correlationsText2}</T>
              </p>
              <figure>
                <img
                  src="/images/dxy/fig5.png"
                  alt={translations[lang].fig5Caption}
                  className="my-6 mx-auto rounded-lg shadow-md"
                />
                <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <T lang={lang} translations={translations}>{translations[lang].fig5Caption}</T>
                </figcaption>
              </figure>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].fundamentals}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].fundamentalsText}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].risks}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].risksText}</T>
              </p>

              <table className="table-auto border-collapse border border-neutral-200 dark:border-neutral-800 my-12 w-full text-sm">
                <thead>
                  <tr className="bg-neutral-100 dark:bg-neutral-900">
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableConcern}</T>
                    </th>
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableImpact}</T>
                    </th>
                    <th className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableProbability}</T>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow1Concern}</T>
                    </td>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow1Impact}</T>
                    </td>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow1Probability}</T>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow2Concern}</T>
                    </td>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow2Impact}</T>
                    </td>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow2Probability}</T>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow3Concern}</T>
                    </td>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow3Impact}</T>
                    </td>
                    <td className="border border-neutral-200 dark:border-neutral-800 px-4 py-2">
                      <T lang={lang} translations={translations}>{translations[lang].tableRow3Probability}</T>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].conclusion}</T>
              </h2>
              <p className="mb-6">
                <T lang={lang} translations={translations}>{translations[lang].conclusionText}</T>
              </p>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].references}</T>
              </h2>

              <ul className="list-disc pl-6 mb-6 text-neutral-900 dark:text-neutral-100">
                <li>
                  Engel, C., &amp; West, K. D. (2005).{" "}
                  <a href="https://doi.org/10.1086/429137" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300">
                    Exchange Rates and Fundamentals
                  </a>.
                </li>
                <li>
                  Georgiadis, G. (2016).{" "}
                  <a
                    href="https://doi.org/10.1016/j.jimonfin.2015.06.010"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Determinants of global spillovers from US monetary policy
                  </a>
                  .
                </li>
                <li>
                  Habib, M. M., &amp; Stracca, L. (2012).{" "}
                  <a
                    href="https://doi.org/10.1016/j.jinteco.2011.12.005"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Getting beyond carry trade: What makes a safe haven currency?
                  </a>
                  .
                </li>
                <li>
                  Zhang, Y. J., &amp; Wei, Y. M. (2010).{" "}
                  <a
                    href="https://doi.org/10.1016/j.resourpol.2010.05.003"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    The crude oil market and the gold market
                  </a>
                  .
                </li>
                <li>
                  Rogoff, K. (1985).{" "}
                  <a
                    href="https://doi.org/10.1016/0022-1996(85)90052-2"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Can international monetary policy cooperation be counterproductive?
                  </a>
                  .
                </li>
                <li>
                  Lothian, J. R. (2006).{" "}
                  <a
                    href="https://research.library.fordham.edu/cgi/viewcontent.cgi?article=1011&context=crif_working_papers"
                    className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    The internationalization of money and finance
                  </a>
                  .
                </li>
              </ul>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}