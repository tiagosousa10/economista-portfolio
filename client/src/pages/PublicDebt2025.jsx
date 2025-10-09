// src/pages/PublicDebt2025.jsx
import React, { useState } from "react";
import { ArrowLeft, Moon, Sun, Globe } from "lucide-react";
import T from "../components/T";

const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

export default function PublicDebt2025() {
  const [lang, setLang] = useState("pt");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translations = {
    pt: {
      title: "Análise da Dívida Pública Global: Tendências, Riscos e Sustentabilidade",
      date: "03/09/2025",
      introTitle: "I. Introdução",
      intro: "A dívida pública tornou-se um dos temas mais relevantes da economia contemporânea, tanto em países desenvolvidos como em economias emergentes (Eichengreen et al., 2019). A acumulação de obrigações financeiras por parte dos Estados, resultante de défices orçamentais persistentes, levanta questões centrais sobre sustentabilidade fiscal, estabilidade macroeconómica e justiça intergeracional. A discussão em torno da dívida pública é hoje inevitável, sobretudo num contexto em que a economia global enfrenta taxas de juro em elevação, tensões geopolíticas crescentes e necessidades de investimento estruturais ligadas à transição climática e ao envelhecimento populacional (IMF, 2025).<br/><br/>O objetivo deste estudo é analisar a evolução da dívida pública mundial de forma acessível, mas académica, explicando os conceitos fundamentais, apresentando os principais modelos analíticos usados na literatura e avaliando, com base em dados do World Economic Outlook do Fundo Monetário Internacional (WEO, Abril 2025), a situação atual das maiores economias mundiais. Pretende-se ainda discutir as preocupações mais prementes, explorar as projeções futuras e identificar os riscos e estratégias que poderão marcar a próxima década em matéria de sustentabilidade fiscal.<br/><br/>A importância do tema é confirmada pelos dados recentes do IMF: segundo o WEO (2025), a dívida pública global situa-se em torno de 93% do PIB mundial em 2024, com tendência de ultrapassar 100% até ao final da década. Este valor representa níveis historicamente elevados, comparáveis apenas aos registados no rescaldo da Segunda Guerra Mundial (IMF, 2025). A título de exemplo, os Estados Unidos registam uma trajetória crescente de endividamento, com dívida projetada acima de 120% do PIB até 2030; o Japão mantém níveis persistentemente superiores a 250%; e na zona euro, países como Itália e França enfrentam trajetórias de crescimento que levantam dúvidas quanto à sua sustentabilidade de médio prazo (IMF,2025).<br/><br/>Estes números ganham relevância adicional quando se considera o ambiente global. O aumento das taxas de juro desde 2022 encareceu o serviço da dívida, revertendo parcialmente a “era dos juros baixos” que havia atenuado a pressão sobre os orçamentos públicos (Blanchard, 2019). Ao mesmo tempo, fatores estruturais como o envelhecimento demográfico e a necessidade de financiar a transição energética implicam pressões orçamentais adicionais (Auerbach et al., 2016). A questão fundamental, portanto, não é apenas o nível da dívida, mas também a sua dinâmica, a capacidade dos governos em gerar saldos primários sustentáveis e a confiança dos mercados na trajetória fiscal (Mauro e Zhou, 2021).<br/><br/>O estudo da dívida pública é central por três razões. Em primeiro lugar, porque influencia diretamente a política orçamental: governos com níveis elevados de dívida enfrentam restrições severas à capacidade de resposta a choques económicos (Ghosh et al., 2013). Em segundo lugar, porque afeta a política monetária e financeira: o endividamento soberano elevado pode limitar a margem de atuação dos bancos centrais e gerar riscos de instabilidade financeira (Eichengreen et al., 2019). Em terceiro lugar, porque envolve questões de equidade intergeracional: a acumulação de dívida hoje pode traduzir-se em encargos excessivos para as gerações futuras (Blanchard, 2019).<br/><br/>Para além das implicações económicas, a dívida pública assume uma dimensão política e social. O grau de confiança que cidadãos e investidores depositam na capacidade de um Estado honrar os seus compromissos é um fator crítico de estabilidade institucional (Reinhart e Rogoff, 2010). Em economias emergentes, onde a margem fiscal é reduzida e a vulnerabilidade cambial mais elevada, crises de dívida podem desencadear recessões profundas e instabilidade política (Reinhart e Rogoff, 2010). Já nas economias avançadas, embora a capacidade de financiamento seja maior, níveis de dívida persistentemente elevados podem reduzir o crescimento potencial e aumentar os custos de financiamento de longo prazo (Eichengreen et al., 2019).<br/><br/>Este estudo tem quatro objetivos principais:<ol><li>Explicar de forma clara o conceito de dívida pública e os mecanismos que determinam a sua evolução;</li><li>Rever a literatura académica recente sobre sustentabilidade da dívida, destacando modelos e equações centrais;</li><li>Analisar, com base nos dados do IMF (WEO 2025), a situação das maiores economias mundiais;</li><li>Identificar preocupações, projeções e riscos futuros, propondo estratégias de mitigação.</li></ol>A metodologia assenta em duas vertentes: (i) revisão teórica, com recurso a artigos científicos publicados em revistas académicas de referência após 2020, e (ii) análise empírica, baseada exclusivamente nos dados do World Economic Outlook (Abril 2025) do IMF.<br/><br/>O trabalho encontra-se dividido em sete secções principais. Após esta introdução, a Secção 2 apresenta os fundamentos teóricos da dívida pública e as principais equações utilizadas na literatura. A Secção 3 descreve o panorama global, com destaque para as maiores economias. A Secção 4 discute as preocupações atuais, enquanto a Secção 5 aborda as projeções futuras. A Secção 6 apresenta estratégias de política económica e mecanismos de combate à insustentabilidade. Por fim, a Secção 7 sintetiza as principais conclusões e sugere pistas para investigação futura.",
      fundamentalsTitle: "II. Fundamentos Teóricos e Modelos de Dívida Pública",
      defConceitosTitle: "Definição e conceitos básicos",
      defConceitosText: "A dívida pública corresponde ao total das obrigações financeiras contraídas por um Estado, resultantes de défices orçamentais acumulados ao longo do tempo (IMF, 2025). Segundo o Fundo Monetário Internacional (IMF, 2025), a métrica mais utilizada é a dívida bruta do governo geral em percentagem do PIB, a qual permite comparar diferentes países e avaliar a sustentabilidade fiscal no tempo (IMF, 2025).<br/><br/>A literatura distingue entre dívida bruta e dívida líquida. A primeira contabiliza o total das responsabilidades financeiras do governo, independentemente dos seus ativos. A segunda deduz desses passivos os ativos financeiros detidos pelo Estado, oferecendo uma visão mais ajustada da posição líquida do setor público (Mauro e Zhou, 2021). Além disso, pode classificar-se a dívida em interna (denominada na moeda doméstica e detida por residentes) e externa (em moeda estrangeira ou detida por não residentes). Esta distinção é relevante, dado que a dívida externa aumenta a vulnerabilidade cambial e pode originar crises mais severas em economias emergentes (Reinhart e Rogoff, 2010).",
      identidadeTitle: "A identidade orçamental do governo",
      identidadeText: "O ponto de partida para compreender a dinâmica da dívida é a identidade orçamental do governo. Em termos simplificados:<br/><i>B</i><sub>t</sub> = (1 + <i>r</i>) <i>B</i><sub>t-1</sub> + <i>G</i><sub>t</sub> − <i>T</i><sub>t</sub><br/>onde:<ul><li><i>B</i><sub>t</sub> representa o stock de dívida no final do período t,</li><li><i>r</i> é a taxa de juro média,</li><li><i>G</i><sub>t</sub> é a despesa pública primária (excluindo juros),</li><li><i>T</i><sub>t</sub> são as receitas fiscais.</li></ul>Esta equação indica que a dívida no final de um período resulta da dívida anterior acrescida dos juros e do défice primário (<i>G</i><sub>t</sub> − <i>T</i><sub>t</sub>). Se as receitas fiscais excederem a despesa primária, gera-se um superavit primário capaz de reduzir o stock de dívida (Blanchard, 2019).",
      snowballTitle: "A equação do efeito bola de neve (snowball effect)",
      snowballText: "Partindo da identidade orçamental e dividindo pelo PIB nominal (<i>Y</i><sub>t</sub>), obtém-se a dinâmica do rácio dívida/PIB (<i>d</i><sub>t</sub> = <i>B</i><sub>t</sub>/<i>Y</i><sub>t</sub>):<br/>Δ<i>d</i><sub>t</sub> = (<i>r</i>−<i>g</i>)<i>d</i><sub>t-1</sub> − <i>pb</i><sub>t</sub><br/>onde:<ul><li><i>d</i><sub>t-1</sub> é o rácio dívida/PIB no período anterior,</li><li><i>r</i> é a taxa de juro nominal média da dívida,</li><li><i>g</i> é a taxa de crescimento nominal do PIB,</li><li><i>pb</i><sub>t</sub> é o saldo primário em percentagem do PIB (positivo se superavitário).</li></ul>O termo (<i>r</i>−<i>g</i>)<i>d</i><sub>t-1</sub> é conhecido como efeito bola de neve. Quando <i>r</i> > <i>g</i>, os encargos com juros crescem mais rápido do que a economia, levando a um aumento automático do rácio dívida/PIB, mesmo que o saldo primário seja nulo. Por outro lado, se <i>g</i> > <i>r</i>, a economia cresce mais rápido que os juros, facilitando a redução do peso da dívida (Blanchard, 2019).<br/><br/>Este modelo simples é amplamente usado em análises de sustentabilidade fiscal. O IMF recorre a esta decomposição para avaliar cenários de médio prazo nos seus relatórios de Fiscal Monitor e World Economic Outlook (IMF, 2025).",
      intertemporalTitle: "Restrição orçamental intertemporal",
      intertemporalText: "A sustentabilidade fiscal exige que o valor presente da dívida seja igual ao valor presente dos saldos primários futuros. Esta condição pode ser expressa como:<br/><i>B</i><sub>t</sub> = &sum;<sub>i=1</sub><sup>&infin;</sup> <i>PB</i><sub>t+i</sub> / (1 + <i>r</i>)<sup>i</sup><br/>onde <i>B</i><sub>t</sub> representa o stock atual de dívida e <i>PB</i><sub>t+i</sub> os saldos primários futuros.<br/><br/>Esta equação traduz a chamada restrição orçamental intertemporal: a dívida de hoje terá de ser paga, direta ou indiretamente, através de superavits primários futuros. Caso contrário, a trajetória fiscal torna-se insustentável (Auerbach et al., 2016).<br/><br/>A relevância prática desta equação está em mostrar que não basta estabilizar a dívida no curto prazo; é necessário assegurar que os superavits futuros são consistentes com o nível de endividamento atual.",
      reactionTitle: "Função de reação fiscal",
      reactionText: "A abordagem empírica mais comum à sustentabilidade fiscal é a análise da função de reação fiscal, proposta inicialmente por Bohn (1998) e atualizada em vários estudos recentes (Ghosh et al., 2013; Ghosh et al., 2013).<br/><br/>A função assume a forma:<br/><i>pb</i><sub>t</sub> = α + β <i>d</i><sub>t-1</sub> + ε<sub>t</sub><br/>onde:<ul><li><i>pb</i><sub>t</sub> é o saldo primário em percentagem do PIB,</li><li>α é uma constante,</li><li>β é o parâmetro de resposta,</li><li><i>d</i><sub>t-1</sub> é o rácio dívida/PIB do período anterior.</li></ul>Se β > 0, o governo ajusta o saldo primário positivamente quando a dívida aumenta, sinalizando sustentabilidade. Contudo, vários estudos recentes apontam para o fenómeno da fadiga fiscal, em que a resposta positiva do saldo primário à dívida enfraquece quando o endividamento atinge níveis muito elevados (Mauro e Zhou, 2021; Ghosh et al., 2013).",
      perspectivasTitle: "Perspetivas recentes da literatura académica",
      perspectivasText: "A literatura académica tem contribuído com análises importantes:<ul><li>Blanchard (2019) enfatizou a importância relativa da diferença (<i>r</i>−<i>g</i>). Enquanto as taxas de juro se mantiveram estruturalmente baixas, a dívida elevada era considerada menos problemática. O recente aumento das taxas de juro alterou esse equilíbrio (IMF, 2025).</li><li>Reinhart e Rogoff (2010) alertam para os riscos de crises de dívida em países emergentes com forte exposição cambial, reforçando que a tolerância à dívida varia de acordo com o nível de desenvolvimento institucional.</li><li>Ghosh et al. (2013) documentaram empiricamente a existência de fadiga fiscal em vários países, mostrando que governos muito endividados têm menor capacidade de ajustar os saldos primários.</li></ul>",
      sinteseFundamentalsTitle: "Síntese",
      sinteseFundamentalsText: "Os modelos teóricos apresentados (identidade orçamental, efeito bola de neve, restrição intertemporal e função de reação fiscal) constituem a base da análise de sustentabilidade da dívida. Contudo, a literatura recente evidencia que a sustentabilidade depende não apenas destes fundamentos, mas também de fatores políticos, institucionais e estruturais. No contexto atual, marcado por taxas de juro crescentes, tensões geopolíticas e pressões de despesa ligadas ao clima e à demografia, compreender estes mecanismos é essencial para avaliar a trajetória futura da dívida pública mundial.",
      panoramaTitle: "III. Panorama Global da Dívida Pública segundo o IMF (WEO 2025)",
      tendenciasTitle: "Tendências mundiais",
      tendenciasText: "De acordo com o World Economic Outlook (IMF, 2025), a dívida pública global atingiu aproximadamente 93% do PIB mundial em 2024, com projeções que apontam para valores acima de 100% até ao final da década. Este patamar é historicamente elevado e só encontra paralelo no período imediatamente após a Segunda Guerra Mundial. O relatório enfatiza que mais de 80% do PIB mundial corresponde a economias onde a dívida é hoje mais elevada e cresce mais rapidamente do que antes da pandemia da COVID-19.<br/><br/>A nível agregado, a trajetória da dívida reflete três dinâmicas principais:<ol><li>O impacto persistente da pandemia, que exigiu pacotes orçamentais sem precedentes (IMF, 2025);</li><li>O aumento das taxas de juro globais desde 2022, que encareceu o serviço da dívida (Blanchard, 2019);</li><li>A acumulação de défices primários em várias economias, resultantes de políticas expansionistas e de pressões estruturais de despesa (Mauro e Zhou, 2021).</li></ol>",
      economiasAvancadasTitle: "Economias avançadas",
      estadosUnidosTitle: "Estados Unidos",
      estadosUnidosText: "Nos Estados Unidos, a dívida federal detida pelo público era equivalente a 99% do PIB em 2024 e encontra-se projetada para ultrapassar os 120% até 2030, segundo o IMF (2025). O fator determinante tem sido a acumulação de défices primários persistentes, associados a cortes fiscais e a aumentos de despesa em segurança social e saúde.<br/><br/>A equação do efeito bola de neve revela-se particularmente relevante neste caso: com taxas de juro médias (<i>r</i>) agora superiores ao crescimento nominal do PIB (<i>g</i>), a dinâmica da dívida americana tornou-se mais desfavorável (Blanchard, 2019). Este fenómeno coloca em causa a sustentabilidade de longo prazo, a menos que se implementem reformas fiscais ou se verifique uma aceleração inesperada do crescimento económico (Mauro e Zhou, 2021).",
      zonaEuroTitle: "Zona Euro",
      zonaEuroText: "Na zona euro, a dívida pública agregada mantém-se acima de 90% do PIB, mas com fortes diferenças entre países. Em 2024, a Alemanha apresentava um rácio de cerca de 62%, enquanto Itália ultrapassava os 140% e França os 110% (IMF, 2025).<br/><br/>O Japão continua a ser um caso singular, com dívida superior a 250% do PIB em 2024. Apesar dos níveis elevados, a sustentabilidade tem sido garantida por taxas de juro persistentemente baixas e pelo facto de a maior parte da dívida estar em mãos domésticas. No entanto, o IMF alerta para riscos de médio prazo, sobretudo se os custos de financiamento aumentarem.",
      economiasEmergentesTitle: "Economias emergentes",
      chinaTitle: "China",
      chinaText: "Na China, a dívida pública bruta ascendeu a cerca de 80% do PIB em 2024. Embora inferior à média das economias avançadas, preocupa a acumulação de dívida a nível das administrações locais e das empresas estatais, frequentemente através de veículos de financiamento pouco transparentes. Estes passivos contingentes podem agravar significativamente a posição fiscal do país (IMF, 2025).",
      indiaTitle: "Índia",
      indiaText: "A Índia mantém um rácio de dívida em torno de 85% do PIB em 2024. O desafio central prende-se com a necessidade de financiar infraestruturas e programas sociais num contexto de receitas fiscais limitadas. O IMF destaca que a sustentabilidade da dívida indiana depende da capacidade de manter crescimento económico robusto, superior a 6% ao ano, compensando custos de financiamento crescentes.",
      americaLatinaTitle: "América Latina",
      americaLatinaText: "Na América Latina, casos como o Brasil e a Argentina ilustram a vulnerabilidade das economias emergentes. O Brasil apresenta dívida pública próxima de 90% do PIB, com taxas de juro elevadas que tornam o serviço da dívida particularmente oneroso. A Argentina, por sua vez, enfrenta riscos de incumprimento recorrentes, devido a desequilíbrios fiscais e dependência de financiamento externo (Reinhart e Rogoff, 2010).",
      paisesBaixoRendimentoTitle: "Países de baixo rendimento",
      paisesBaixoRendimentoText: "Nos países de baixo rendimento, a dívida pública cresceu rapidamente na última década, atingindo em média 60% do PIB em 2024 (IMF, 2025). A situação é agravada pelo facto de uma parte substancial da dívida ser externa e em moeda estrangeira, aumentando a vulnerabilidade a choques cambiais e de liquidez (Reinhart e Rogoff, 2010).",
      sinteseComparativaTitle: "Síntese comparativa",
      sinteseComparativaText: "A análise comparativa evidencia três padrões globais:<ol><li>Nas economias avançadas, o problema não é apenas o nível elevado da dívida, mas também a tendência de crescimento, agravada pela diferença negativa entre taxas de juro e crescimento económico (Blanchard, 2019).</li><li>Nas economias emergentes, o risco principal reside na exposição cambial e na falta de margens fiscais para responder a choques (Reinhart e Rogoff, 2010).</li><li>Nos países de baixo rendimento, a vulnerabilidade está associada ao elevado peso da dívida externa e à escassez de receitas internas (IMF, 2025).</li></ol>",
      concernsTitle: "IV. Preocupações atuais",
      custoServicoTitle: "Custo do serviço da dívida",
      custoServicoText: "Uma das preocupações mais imediatas é o aumento do custo do serviço da dívida. O IMF (2025) estima que, em média, os pagamentos de juros representarão 10% das receitas fiscais nas economias avançadas em 2025, podendo ultrapassar 20% em alguns países emergentes altamente endividados.",
      envelhecimentoTitle: "Envelhecimento demográfico",
      envelhecimentoText: "O envelhecimento da população é outro fator de pressão. O IMF (2025) projeta que a taxa de dependência — razão entre população idosa e população ativa — aumentará significativamente nas próximas décadas (Andersen, 2012; Auerbach et al., 2016). Este fenómeno implicará maior despesa com pensões e saúde, colocando pressão sobre os saldos primários.",
      transicaoEnergeticaTitle: "Transição energética e investimento climático",
      transicaoEnergeticaText: "A transição para uma economia verde exige investimentos públicos massivos. O IMF (2025) alerta que os custos associados à mitigação e adaptação climática poderão representar entre 2 e 3% do PIB anual em economias avançadas, e até 5% em economias em desenvolvimento.",
      tensoesGeopoliticasTitle: "Tensões geopolíticas",
      tensoesGeopoliticasText: "As tensões geopolíticas, incluindo conflitos militares e disputas comerciais, agravam os riscos fiscais. O aumento da despesa em defesa é evidente em várias economias, enquanto tarifas comerciais reduzem receitas e crescimento (IMF, 2025).",
      espacoFiscalTitle: "Espaço fiscal limitado",
      espacoFiscalText: "Por fim, o conceito de espaço fiscal assume relevância. Este refere-se à margem de manobra que os governos dispõem para aumentar a despesa ou reduzir impostos sem comprometer a sustentabilidade da dívida. O IMF (2025) conclui que muitos países esgotaram parte substancial do seu espaço fiscal durante a pandemia, o que limita a capacidade de resposta a futuros choques económicos.",
      projectionsTitle: "V. Projeções Futuras (IMF WEO 2025)",
      projectionsText: "O World Economic Outlook (IMF, 2025) projeta que a dívida pública global ultrapassará os 100% do PIB mundial até 2030. Em cenários adversos, envolvendo crescimento mais baixo e tensões geopolíticas prolongadas, este valor poderá atingir 117% já em 2027.<br/><br/>As projeções do IMF baseiam-se em cenários centrais e alternativos. No cenário central, pressupõe-se uma redução gradual dos défices primários, estabilizando a dívida em torno de 102% do PIB mundial em 2030. No entanto, em cenários adversos, a conjugação de crescimento baixo (<i>g</i>) e taxas de juro mais elevadas (<i>r</i>) gera um efeito bola de neve negativo, acelerando a trajetória de endividamento.",
      diferencasRegionaisTitle: "Diferenças regionais",
      diferencasRegionaisText: "<ul><li>Estados Unidos: dívida projetada acima de 120% do PIB em 2030, devido a défices primários persistentes.</li><li>Zona Euro: estabilização próxima de 90%, mas com riscos assimétricos — Itália e França continuam em trajetórias ascendentes.</li><li>Japão: manutenção em patamares superiores a 250% do PIB, com riscos de refinanciamento de médio prazo.</li><li>China: aumento para cerca de 90% do PIB até 2030, impulsionado por necessidades de investimento público.</li><li>Países de baixo rendimento: risco de incumprimento elevado, com dívida média próxima de 70% do PIB em 2030.</li></ul>",
      sustentabilidadeIntertemporalTitle: "Sustentabilidade intertemporal e crises soberanas",
      sustentabilidadeIntertemporalText: "As projeções do IMF sugerem que vários países enfrentarão riscos crescentes de crises de dívida soberana. A condição intertemporal de sustentabilidade poderá não ser cumprida em cenários de fraco crescimento económico e ausência de reformas fiscais.",
      strategiesTitle: "VI. Estratégias e Caminhos de Combate à Insustentabilidade",
      consolidacaoTitle: "Consolidação fiscal",
      consolidacaoText: "Uma das estratégias mais debatidas é a consolidação fiscal. O IMF (2025) defende ajustamentos graduais que combinem aumento de receitas e racionalização da despesa. A literatura pós-2020 sugere que consolidações baseadas em reformas estruturais e eficiência na despesa tendem a ser mais sustentáveis do que cortes abruptos (Mauro e Zhou, 2021).",
      regrasTitle: "Regras orçamentais e instituições fiscais",
      regrasText: "Regras orçamentais credíveis e instituições fiscais independentes são essenciais para ancorar expectativas. Estudos recentes mostram que países com regras fiscais bem desenhadas conseguem reduzir custos de financiamento e estabilizar trajetórias de dívida (Ghosh et al., 2013).",
      gestaoAtivaTitle: "Gestão ativa da dívida",
      gestaoAtivaText: "Estratégias de gestão ativa incluem alongamento de maturidades, diversificação de investidores e emissão de instrumentos indexados ao crescimento ou à inflação. Estes mecanismos permitem mitigar riscos de refinanciamento e alinhar o serviço da dívida com a capacidade de pagamento futura.",
      crescimentoTitle: "Crescimento económico inclusivo",
      crescimentoText: "O crescimento económico robusto continua a ser o mecanismo mais eficaz para reduzir o peso da dívida. Se <i>g</i> > <i>r</i>, o efeito bola de neve torna-se favorável. O IMF (2025) destaca a importância de políticas que promovam inovação, produtividade e inclusão social, garantindo que o crescimento seja sustentado.",
      inovacaoTitle: "Inovação financeira e instrumentos verdes",
      inovacaoText: "Nos últimos anos, têm ganho destaque os instrumentos de dívida sustentável, como green bonds e social bonds. Estes títulos permitem financiar a transição energética e projetos sociais com custos de financiamento potencialmente mais baixos, dado o interesse crescente dos investidores institucionais em ativos ESG.",
      conclusionTitle: "VII. Conclusão",
      conclusionText: "A análise da dívida pública mundial evidencia um cenário desafiante. Os níveis atuais de endividamento são historicamente elevados, e as projeções do IMF (2025) indicam uma trajetória ascendente a médio prazo. O contexto de taxas de juro mais altas, envelhecimento populacional, necessidades de investimento climático e tensões geopolíticas agrava os riscos de sustentabilidade.<br/><br/>As equações fundamentais da dívida (efeito bola de neve, restrição intertemporal e função de reação fiscal) ajudam a compreender a mecânica da acumulação de dívida. Contudo, a literatura recente sublinha que fatores estruturais e institucionais são igualmente determinantes.<br/><br/>Para enfrentar os desafios futuros, será necessário combinar consolidação fiscal gradual, reformas estruturais, inovação na gestão da dívida e promoção de crescimento inclusivo. Só assim será possível assegurar sustentabilidade intertemporal e preservar a confiança dos mercados e das sociedades na capacidade dos Estados cumprirem as suas obrigações.<br/><br/>Este estudo contribui para clarificar conceitos e reforçar a ligação entre teoria, evidência empírica e políticas públicas. No entanto, a incerteza futura, em particular no domínio geopolítico e climático, exige monitorização constante e flexibilidade nas estratégias adotadas.",
      referencesTitle: "Referências",
      references: "Andersen, T. M. (2012). <a href=\"https://doi.org/10.1016/j.jmacro.2012.01.001\">Fiscal sustainability and demographics – Should we save or work more?</a> Journal of Macroeconomics, 34(2), 264–280.<br/>Auerbach, A. J. (2016). <a href=\"https://doi.org/10.1002/app5.131\">Long-term fiscal sustainability in advanced economies</a>. Asia and the Pacific Policy Studies, 3(2), 165–175.<br/>Blanchard, O. (2019). <a href=\"https://doi.org/10.1257/aer.109.4.1197\">Public Debt and Low Interest Rates</a>. American Economic Review, 109(4), 1197–1229.<br/>Eichengreen, B., El-Ganainy, A., Esteves, R. P., & Mitchener, K. J. (2019). <a href=\"https://doi.org/10.5089/9781484392898.001\">Public debt through the ages</a>. Oxford University Press.<br/>Ghosh, A. R., Kim, J. I., Mendoza, E. G., Ostry, J. D., & Qureshi, M. S. (2013). <a href=\"https://doi.org/10.1111/ecoj.12010\">Fiscal Fatigue, Fiscal Space and Debt Sustainability in Advanced Economies</a>. Economic Journal, 123(566), F4–F30.<br/>International Monetary Fund. (2025). <a href=\"https://www.imf.org/external/datamapper/datasets/WEO\">World Economic Outlook, April 2025: Balancing Fiscal Risks in an Uncertain World</a>. Washington, D.C.: IMF.<br/>Mauro, P., & Zhou, J. (2021). <a href=\"https://doi.org/10.5089/9781513536071.001\">r minus g negative: Can We Sleep More Soundly?</a> IMF Economic Review, 69, 744–789.<br/>Reinhart, C. M., & Rogoff, K. S. (2010). <a href=\"https://doi.org/10.1257/aer.100.2.573\">Growth in a Time of Debt</a>. American Economic Review, 100(2), 573–578.",
      realityCheck: "Nota de Realidade",
      warning: "As projeções do FMI assumem estabilidade macroeconómica, o que pode subestimar riscos futuros.",
      backToAnalyses: "Voltar à página anterior",
    },
    en: {
      title: "Analysis of Global Public Debt: Trends, Risks, and Sustainability",
      date: "09/03/2025",
      introTitle: "I. Introduction",
      intro: "Public debt has become one of the most relevant topics in contemporary economics, both in developed countries and emerging economies (Eichengreen et al., 2019). The accumulation of financial obligations by States, resulting from persistent budget deficits, raises central questions about fiscal sustainability, macroeconomic stability, and intergenerational justice. The discussion around public debt is today inevitable, especially in a context where the global economy faces rising interest rates, growing geopolitical tensions, and structural investment needs linked to the climate transition and population aging (IMF, 2025).<br/><br/>The objective of this study is to analyze the evolution of global public debt in an accessible but academic way, explaining the fundamental concepts, presenting the main analytical models used in the literature, and evaluating, based on data from the World Economic Outlook of the International Monetary Fund (WEO, April 2025), the current situation of the world's largest economies. It is also intended to discuss the most pressing concerns, explore future projections, and identify the risks and strategies that may mark the next decade in terms of fiscal sustainability.<br/><br/>The importance of the topic is confirmed by recent IMF data: according to the WEO (2025), global public debt is around 93% of world GDP in 2024, with a trend to exceed 100% by the end of the decade. This value represents historically high levels, comparable only to those recorded in the aftermath of World War II (IMF, 2025). For example, the United States records a growing debt trajectory, with projected debt above 120% of GDP by 2030; Japan maintains persistently higher levels above 250%; and in the euro zone, countries like Italy and France face growth trajectories that raise doubts about their medium-term sustainability (IMF, 2025).<br/><br/>These numbers gain additional relevance when considering the global environment. The increase in interest rates since 2022 has made debt service more expensive, partially reversing the 'era of low interest rates' that had eased pressure on public budgets (Blanchard, 2019). At the same time, structural factors such as demographic aging and the need to finance the energy transition imply additional budgetary pressures (Auerbach et al., 2016). The fundamental question, therefore, is not just the level of debt, but also its dynamics, the governments' ability to generate sustainable primary balances, and the markets' confidence in the fiscal trajectory (Mauro and Zhou, 2021).<br/><br/>The study of public debt is central for three reasons. First, because it directly influences fiscal policy: governments with high debt levels face severe restrictions on their ability to respond to economic shocks (Ghosh et al., 2013). Second, because it affects monetary and financial policy: high sovereign debt can limit the central banks' margin of action and generate financial instability risks (Eichengreen et al., 2019). Third, because it involves intergenerational equity issues: the accumulation of debt today can translate into excessive burdens for future generations (Blanchard, 2019).<br/><br/>In addition to economic implications, public debt assumes a political and social dimension. The degree of trust that citizens and investors place in a State's ability to honor its commitments is a critical factor for institutional stability (Reinhart and Rogoff, 2010). In emerging economies, where fiscal margin is reduced and currency vulnerability higher, debt crises can trigger deep recessions and political instability (Reinhart and Rogoff, 2010). In advanced economies, although financing capacity is greater, persistently high debt levels can reduce potential growth and increase long-term financing costs (Eichengreen et al., 2019).<br/><br/>This study has four main objectives:<ol><li>Explain clearly the concept of public debt and the mechanisms that determine its evolution;</li><li>Review recent academic literature on debt sustainability, highlighting central models and equations;</li><li>Analyze, based on IMF data (WEO 2025), the situation of the world's largest economies;</li><li>Identify concerns, projections, and future risks, proposing mitigation strategies.</li></ol>The methodology is based on two aspects: (i) theoretical review, using scientific articles published in reference academic journals after 2020, and (ii) empirical analysis, based exclusively on data from the World Economic Outlook (April 2025) of the IMF.<br/><br/>The work is divided into seven main sections. After this introduction, Section 2 presents the theoretical foundations of public debt and the main equations used in the literature. Section 3 describes the global panorama, with emphasis on the largest economies. Section 4 discusses current concerns, while Section 5 addresses future projections. Section 6 presents economic policy strategies and mechanisms to combat unsustainability. Finally, Section 7 synthesizes the main conclusions and suggests avenues for future research.",
      fundamentalsTitle: "II. Theoretical Foundations and Models of Public Debt",
      defConceitosTitle: "Definition and basic concepts",
      defConceitosText: "Public debt corresponds to the total financial obligations contracted by a State, resulting from budget deficits accumulated over time (IMF, 2025). According to the International Monetary Fund (IMF, 2025), the most used metric is the gross debt of the general government as a percentage of GDP, which allows comparing different countries and evaluating fiscal sustainability over time (IMF, 2025).<br/><br/>The literature distinguishes between gross debt and net debt. The first accounts for the total financial liabilities of the government, regardless of its assets. The second deducts from these liabilities the financial assets held by the State, offering a more adjusted view of the public sector's net position (Mauro and Zhou, 2021). In addition, debt can be classified as internal (denominated in domestic currency and held by residents) and external (in foreign currency or held by non-residents). This distinction is relevant, since external debt increases currency vulnerability and can originate more severe crises in emerging economies (Reinhart and Rogoff, 2010).",
      identidadeTitle: "The government's budgetary identity",
      identidadeText: "The starting point for understanding debt dynamics is the government's budgetary identity. In simplified terms:<br/><i>B</i><sub>t</sub> = (1 + <i>r</i>) <i>B</i><sub>t-1</sub> + <i>G</i><sub>t</sub> - <i>T</i><sub>t</sub><br/>where:<ul><li><i>B</i><sub>t</sub> represents the debt stock at the end of period t,</li><li><i>r</i> is the average interest rate,</li><li><i>G</i><sub>t</sub> is primary public expenditure (excluding interest),</li><li><i>T</i><sub>t</sub> are tax revenues.</li></ul>This equation indicates that the debt at the end of a period results from the previous debt plus interest and the primary deficit (<i>G</i><sub>t</sub> - <i>T</i><sub>t</sub>). If tax revenues exceed primary expenditure, a primary surplus is generated capable of reducing the debt stock (Blanchard, 2019).",
      snowballTitle: "The snowball effect equation",
      snowballText: "Starting from the budgetary identity and dividing by nominal GDP (<i>Y</i><sub>t</sub>), the dynamics of the debt-to-GDP ratio (<i>d</i><sub>t</sub> = <i>B</i><sub>t</sub> / <i>Y</i><sub>t</sub>) is obtained:<br/>Δ<i>d</i><sub>t</sub> = (<i>r</i> - <i>g</i>) <i>d</i><sub>t-1</sub> - <i>pb</i><sub>t</sub><br/>where:<ul><li><i>d</i><sub>t-1</sub> is the debt-to-GDP ratio in the previous period,</li><li><i>r</i> is the average nominal interest rate on debt,</li><li><i>g</i> is the nominal GDP growth rate,</li><li><i>pb</i><sub>t</sub> is the primary balance as a percentage of GDP (positive if surplus).</li></ul>The term (<i>r</i> - <i>g</i>) <i>d</i><sub>t-1</sub> is known as the snowball effect. When <i>r</i> > <i>g</i>, interest charges grow faster than the economy, leading to an automatic increase in the debt-to-GDP ratio, even if the primary balance is zero. On the other hand, if <i>g</i> > <i>r</i>, the economy grows faster than interest, facilitating the reduction of debt weight (Blanchard, 2019).<br/><br/>This simple model is widely used in fiscal sustainability analyses. The IMF uses this decomposition to evaluate medium-term scenarios in its Fiscal Monitor and World Economic Outlook reports (IMF, 2025).",
      intertemporalTitle: "Intertemporal budget constraint",
      intertemporalText: "Fiscal sustainability requires that the present value of debt be equal to the present value of future primary balances. This condition can be expressed as:<br/><i>B</i><sub>t</sub> = &sum;<sub>i=1</sub><sup>&infin;</sup> <i>PB</i><sub>t+i</sub> / (1 + <i>r</i>)<sup>i</sup><br/>where <i>B</i><sub>t</sub> represents the current debt stock and <i>PB</i><sub>t+i</sub> the future primary balances.<br/><br/>This equation translates the so-called intertemporal budget constraint: today's debt will have to be paid, directly or indirectly, through future primary surpluses. Otherwise, the fiscal trajectory becomes unsustainable (Auerbach et al., 2016).<br/><br/>The practical relevance of this equation is to show that it is not enough to stabilize debt in the short term; it is necessary to ensure that future surpluses are consistent with the current level of indebtedness.",
      reactionTitle: "Fiscal reaction function",
      reactionText: "The most common empirical approach to fiscal sustainability is the analysis of the fiscal reaction function, initially proposed by Bohn (1998) and updated in several recent studies (Ghosh et al., 2013; Ghosh et al., 2013).<br/><br/>The function assumes the form:<br/><i>pb</i><sub>t</sub> = α + β <i>d</i><sub>t-1</sub> + ε<sub>t</sub><br/>where:<ul><li><i>pb</i><sub>t</sub> is the primary balance as a percentage of GDP,</li><li>α is a constant,</li><li>β is the response parameter,</li><li><i>d</i><sub>t-1</sub> is the debt-to-GDP ratio of the previous period.</li></ul>If β > 0, the government adjusts the primary balance positively when debt increases, signaling sustainability. However, several recent studies point to the phenomenon of fiscal fatigue, in which the positive response of the primary balance to debt weakens when indebtedness reaches very high levels (Mauro and Zhou, 2021; Ghosh et al., 2013).",
      perspectivasTitle: "Recent perspectives from academic literature",
      perspectivasText: "Academic literature has contributed with important analyses:<ul><li>Blanchard (2019) emphasized the relative importance of the difference (<i>r</i> - <i>g</i>). While interest rates remained structurally low, high debt was considered less problematic. The recent increase in interest rates has altered this balance (IMF, 2025).</li><li>Reinhart and Rogoff (2010) warn of the risks of debt crises in emerging countries with strong currency exposure, reinforcing that debt tolerance varies according to the level of institutional development.</li><li>Ghosh et al. (2013) empirically documented the existence of fiscal fatigue in several countries, showing that highly indebted governments have less capacity to adjust primary balances.</li></ul>",
      sinteseFundamentalsTitle: "Synthesis",
      sinteseFundamentalsText: "The theoretical models presented (budgetary identity, snowball effect, intertemporal constraint, and fiscal reaction function) constitute the basis of debt sustainability analysis. However, recent literature shows that sustainability depends not only on these fundamentals but also on political, institutional, and structural factors. In the current context, marked by rising interest rates, geopolitical tensions, and expenditure pressures linked to climate and demographics, understanding these mechanisms is essential to evaluate the future trajectory of global public debt.",
      panoramaTitle: "III. Global Panorama of Public Debt according to the IMF (WEO 2025)",
      tendenciasTitle: "Global trends",
      tendenciasText: "According to the World Economic Outlook (IMF, 2025), global public debt reached approximately 93% of world GDP in 2024, with projections pointing to values above 100% by the end of the decade. This level is historically high and only finds parallel in the period immediately after World War II. The report emphasizes that more than 80% of world GDP corresponds to economies where debt is today higher and grows faster than before the COVID-19 pandemic.<br/><br/>At the aggregate level, the debt trajectory reflects three main dynamics:<ol><li>The persistent impact of the pandemic, which required unprecedented budgetary packages (IMF, 2025);</li><li>The increase in global interest rates since 2022, which made debt service more expensive (Blanchard, 2019);</li><li>The accumulation of primary deficits in several economies, resulting from expansionist policies and structural expenditure pressures (Mauro and Zhou, 2021).</li></ol>",
      economiasAvancadasTitle: "Advanced economies",
      estadosUnidosTitle: "United States",
      estadosUnidosText: "In the United States, federal debt held by the public was equivalent to 99% of GDP in 2024 and is projected to exceed 120% by 2030, according to the IMF (2025). The determining factor has been the accumulation of persistent primary deficits, associated with tax cuts and increases in social security and health expenditure.<br/><br/>The snowball effect equation is particularly relevant in this case: with average interest rates (<i>r</i>) now higher than nominal GDP growth (<i>g</i>), the dynamics of American debt has become more unfavorable (Blanchard, 2019). This phenomenon questions long-term sustainability, unless fiscal reforms are implemented or an unexpected acceleration in economic growth occurs (Mauro and Zhou, 2021).",
      zonaEuroTitle: "Euro Zone",
      zonaEuroText: "In the euro zone, aggregate public debt remains above 90% of GDP, but with strong differences between countries. In 2024, Germany had a ratio of about 62%, while Italy exceeded 140% and France 110% (IMF, 2025).<br/><br/>Japan continues to be a singular case, with debt above 250% of GDP in 2024. Despite high levels, sustainability has been guaranteed by persistently low interest rates and the fact that most of the debt is in domestic hands. However, the IMF warns of medium-term risks, especially if financing costs increase.",
      economiasEmergentesTitle: "Emerging economies",
      chinaTitle: "China",
      chinaText: "In China, gross public debt rose to about 80% of GDP in 2024. Although lower than the average for advanced economies, the accumulation of debt at the level of local administrations and state-owned enterprises is concerning, often through non-transparent financing vehicles. These contingent liabilities can significantly worsen the country's fiscal position (IMF, 2025).",
      indiaTitle: "India",
      indiaText: "India maintains a debt ratio around 85% of GDP in 2024. The central challenge relates to the need to finance infrastructure and social programs in a context of limited tax revenues. The IMF highlights that the sustainability of Indian debt depends on the ability to maintain robust economic growth, above 6% per year, compensating for increasing financing costs.",
      americaLatinaTitle: "Latin America",
      americaLatinaText: "In Latin America, cases like Brazil and Argentina illustrate the vulnerability of emerging economies. Brazil has public debt close to 90% of GDP, with high interest rates that make debt service particularly burdensome. Argentina, in turn, faces recurrent default risks, due to fiscal imbalances and dependence on external financing (Reinhart and Rogoff, 2010).",
      paisesBaixoRendimentoTitle: "Low-income countries",
      paisesBaixoRendimentoText: "In low-income countries, public debt grew rapidly in the last decade, reaching an average of 60% of GDP in 2024 (IMF, 2025). The situation is aggravated by the fact that a substantial part of the debt is external and in foreign currency, increasing vulnerability to currency shocks and liquidity (Reinhart and Rogoff, 2010).",
      sinteseComparativaTitle: "Comparative synthesis",
      sinteseComparativaText: "The comparative analysis shows three global patterns:<ol><li>In advanced economies, the problem is not just the high level of debt, but also the growth trend, aggravated by the negative difference between interest rates and economic growth (Blanchard, 2019).</li><li>In emerging economies, the main risk lies in currency exposure and the lack of fiscal margins to respond to shocks (Reinhart and Rogoff, 2010).</li><li>In low-income countries, vulnerability is associated with the high weight of external debt and the scarcity of internal revenues (IMF, 2025).</li></ol>",
      concernsTitle: "IV. Current Concerns",
      custoServicoTitle: "Cost of debt service",
      custoServicoText: "One of the most immediate concerns is the increase in the cost of debt service. The IMF (2025) estimates that, on average, interest payments will represent 10% of tax revenues in advanced economies in 2025, possibly exceeding 20% in some highly indebted emerging countries.",
      envelhecimentoTitle: "Demographic aging",
      envelhecimentoText: "Population aging is another pressure factor. The IMF (2025) projects that the dependency ratio — ratio between elderly population and working-age population — will increase significantly in the coming decades (Andersen, 2012; Auerbach et al., 2016). This phenomenon will imply greater expenditure on pensions and health, putting pressure on primary balances.",
      transicaoEnergeticaTitle: "Energy transition and climate investment",
      transicaoEnergeticaText: "The transition to a green economy requires massive public investments. The IMF (2025) warns that costs associated with climate mitigation and adaptation could represent between 2 and 3% of annual GDP in advanced economies, and up to 5% in developing economies.",
      tensoesGeopoliticasTitle: "Geopolitical tensions",
      tensoesGeopoliticasText: "Geopolitical tensions, including military conflicts and trade disputes, aggravate fiscal risks. The increase in defense spending is evident in several economies, while trade tariffs reduce revenues and growth (IMF, 2025).",
      espacoFiscalTitle: "Limited fiscal space",
      espacoFiscalText: "Finally, the concept of fiscal space assumes relevance. This refers to the margin of maneuver that governments have to increase spending or reduce taxes without compromising debt sustainability. The IMF (2025) concludes that many countries exhausted a substantial part of their fiscal space during the pandemic, limiting the ability to respond to future economic shocks.",
      projectionsTitle: "V. Future Projections (IMF WEO 2025)",
      projectionsText: "The World Economic Outlook (IMF, 2025) projects that global public debt will exceed 100% of world GDP by 2030. In adverse scenarios, involving lower growth and prolonged geopolitical tensions, this value could reach 117% as early as 2027.<br/><br/>The IMF's projections are based on central and alternative scenarios. In the central scenario, a gradual reduction in primary deficits is assumed, stabilizing debt around 102% of world GDP in 2030. However, in adverse scenarios, the combination of low growth (<i>g</i>) and higher interest rates (<i>r</i>) generates a negative snowball effect, accelerating the indebtedness trajectory.",
      diferencasRegionaisTitle: "Regional differences",
      diferencasRegionaisText: "<ul><li>United States: debt projected above 120% of GDP in 2030, due to persistent primary deficits.</li><li>Euro Zone: stabilization close to 90%, but with asymmetric risks — Italy and France continue on upward trajectories.</li><li>Japan: maintenance at levels above 250% of GDP, with medium-term refinancing risks.</li><li>China: increase to about 90% of GDP by 2030, driven by public investment needs.</li><li>Low-income countries: high default risk, with average debt close to 70% of GDP in 2030.</li></ul>",
      sustentabilidadeIntertemporalTitle: "Intertemporal sustainability and sovereign crises",
      sustentabilidadeIntertemporalText: "The IMF's projections suggest that several countries will face increasing risks of sovereign debt crises. The intertemporal sustainability condition may not be met in scenarios of weak economic growth and absence of fiscal reforms.",
      strategiesTitle: "VI. Strategies and Paths to Combat Unsustainability",
      consolidacaoTitle: "Fiscal consolidation",
      consolidacaoText: "One of the most debated strategies is fiscal consolidation. The IMF (2025) advocates gradual adjustments that combine revenue increases and expenditure rationalization. Post-2020 literature suggests that consolidations based on structural reforms and efficiency in expenditure tend to be more sustainable than abrupt cuts (Mauro and Zhou, 2021).",
      regrasTitle: "Budgetary rules and fiscal institutions",
      regrasText: "Credible budgetary rules and independent fiscal institutions are essential to anchor expectations. Recent studies show that countries with well-designed fiscal rules manage to reduce financing costs and stabilize debt trajectories (Ghosh et al., 2013).",
      gestaoAtivaTitle: "Active debt management",
      gestaoAtivaText: "Active management strategies include extending maturities, diversifying investors, and issuing instruments indexed to growth or inflation. These mechanisms allow mitigating refinancing risks and aligning debt service with future payment capacity.",
      crescimentoTitle: "Inclusive economic growth",
      crescimentoText: "Robust economic growth continues to be the most effective mechanism to reduce debt weight. If <i>g</i> > <i>r</i>, the snowball effect becomes favorable. The IMF (2025) highlights the importance of policies that promote innovation, productivity, and social inclusion, ensuring sustained growth.",
      inovacaoTitle: "Financial innovation and green instruments",
      inovacaoText: "In recent years, sustainable debt instruments, such as green bonds and social bonds, have gained prominence. These securities allow financing the energy transition and social projects with potentially lower financing costs, given the growing interest of institutional investors in ESG assets.",
      conclusionTitle: "VII. Conclusion",
      conclusionText: "The analysis of global public debt shows a challenging scenario. Current indebtedness levels are historically high, and IMF projections (2025) indicate an upward trajectory in the medium term. The context of higher interest rates, population aging, climate investment needs, and geopolitical tensions aggravates sustainability risks.<br/><br/>The fundamental debt equations (snowball effect, intertemporal constraint, and fiscal reaction function) help understand the mechanics of debt accumulation. However, recent literature underlines that structural and institutional factors are equally determinant.<br/><br/>To face future challenges, it will be necessary to combine gradual fiscal consolidation, structural reforms, innovation in debt management, and promotion of inclusive growth. Only then will it be possible to ensure intertemporal sustainability and preserve the confidence of markets and societies in the States' ability to fulfill their obligations.<br/><br/>This study contributes to clarifying concepts and reinforcing the link between theory, empirical evidence, and public policies. However, future uncertainty, particularly in the geopolitical and climate domain, requires constant monitoring and flexibility in adopted strategies.",
      referencesTitle: "References",
      references: "Andersen, T. M. (2012). <a href=\"https://doi.org/10.1016/j.jmacro.2012.01.001\">Fiscal sustainability and demographics – Should we save or work more?</a> Journal of Macroeconomics, 34(2), 264–280.<br/>Auerbach, A. J. (2016). <a href=\"https://doi.org/10.1002/app5.131\">Long-term fiscal sustainability in advanced economies</a>. Asia and the Pacific Policy Studies, 3(2), 165–175.<br/>Blanchard, O. (2019). <a href=\"https://doi.org/10.1257/aer.109.4.1197\">Public Debt and Low Interest Rates</a>. American Economic Review, 109(4), 1197–1229.<br/>Eichengreen, B., El-Ganainy, A., Esteves, R. P., & Mitchener, K. J. (2019). <a href=\"https://doi.org/10.5089/9781484392898.001\">Public debt through the ages</a>. Oxford University Press.<br/>Ghosh, A. R., Kim, J. I., Mendoza, E. G., Ostry, J. D., & Qureshi, M. S. (2013). <a href=\"https://doi.org/10.1111/ecoj.12010\">Fiscal Fatigue, Fiscal Space and Debt Sustainability in Advanced Economies</a>. Economic Journal, 123(566), F4–F30.<br/>International Monetary Fund. (2025). <a href=\"https://www.imf.org/external/datamapper/datasets/WEO\">World Economic Outlook, April 2025: Balancing Fiscal Risks in an Uncertain World</a>. Washington, D.C.: IMF.<br/>Mauro, P., & Zhou, J. (2021). <a href=\"https://doi.org/10.5089/9781513536071.001\">r minus g negative: Can We Sleep More Soundly?</a> IMF Economic Review, 69, 744–789.<br/>Reinhart, C. M., & Rogoff, K. S. (2010). <a href=\"https://doi.org/10.1257/aer.100.2.573\">Growth in a Time of Debt</a>. American Economic Review, 100(2), 573–578.",
      realityCheck: "Reality Check",
      warning: "IMF projections assume macroeconomic stability, which may underestimate future risks.",
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
            <a href="/#analises" className="inline-flex items-center gap-2 font-semibold">
              <ArrowLeft className="w-4 h-4" aria-hidden />
              <T lang={lang} translations={translations}>{translations[lang].backToAnalyses}</T>
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
                {isDarkMode ? <Sun className="w-4 h-4" aria-hidden /> : <Moon className="w-4 h-4" aria-hidden />}
                {isDarkMode ? "Light" : "Dark"}
              </button>
              <a
                href="/analises/public-debt-2025.pdf"
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

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].introTitle}</T>
              </h2>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].intro }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].fundamentalsTitle}</T>
              </h2>
              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].defConceitosTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].defConceitosText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].identidadeTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].identidadeText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].snowballTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].snowballText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].intertemporalTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].intertemporalText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].reactionTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].reactionText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].perspectivasTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].perspectivasText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].sinteseFundamentalsTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].sinteseFundamentalsText }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].panoramaTitle}</T>
              </h2>
              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].tendenciasTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].tendenciasText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].economiasAvancadasTitle}</T>
              </h3>
              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                <T lang={lang} translations={translations}>{translations[lang].estadosUnidosTitle}</T>
              </h4>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].estadosUnidosText }} />

              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                <T lang={lang} translations={translations}>{translations[lang].zonaEuroTitle}</T>
              </h4>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].zonaEuroText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].economiasEmergentesTitle}</T>
              </h3>
              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                <T lang={lang} translations={translations}>{translations[lang].chinaTitle}</T>
              </h4>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].chinaText }} />

              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                <T lang={lang} translations={translations}>{translations[lang].indiaTitle}</T>
              </h4>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].indiaText }} />

              <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                <T lang={lang} translations={translations}>{translations[lang].americaLatinaTitle}</T>
              </h4>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].americaLatinaText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].paisesBaixoRendimentoTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].paisesBaixoRendimentoText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].sinteseComparativaTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].sinteseComparativaText }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].concernsTitle}</T>
              </h2>
              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].custoServicoTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].custoServicoText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].envelhecimentoTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].envelhecimentoText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].transicaoEnergeticaTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].transicaoEnergeticaText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].tensoesGeopoliticasTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].tensoesGeopoliticasText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].espacoFiscalTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].espacoFiscalText }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].projectionsTitle}</T>
              </h2>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].projectionsText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].diferencasRegionaisTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].diferencasRegionaisText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].sustentabilidadeIntertemporalTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].sustentabilidadeIntertemporalText }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].strategiesTitle}</T>
              </h2>
              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].consolidacaoTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].consolidacaoText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].regrasTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].regrasText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].gestaoAtivaTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].gestaoAtivaText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].crescimentoTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].crescimentoText }} />

              <h3 className="text-xl font-semibold italic text-indigo-700 dark:text-indigo-300 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].inovacaoTitle}</T>
              </h3>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].inovacaoText }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].conclusionTitle}</T>
              </h2>
              <p className="mb-6" dangerouslySetInnerHTML={{ __html: translations[lang].conclusionText }} />

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].referencesTitle}</T>
              </h2>
              <ul className="list-disc pl-6 mb-6">
                {translations[lang].references.split('<br/>').map((ref, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: ref }} />
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mt-10 mb-4">
                <T lang={lang} translations={translations}>{translations[lang].realityCheck}</T>
              </h2>
              <p className="text-red-600 dark:text-red-400">
                <T lang={lang} translations={translations}>{translations[lang].warning}</T>
              </p>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}