import React from "react";
import { Link } from "react-router-dom";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Section, Card } from "../layout/Container";
import { fmtDate } from "../../utils/dateUtils";

export const SecAnalises = ({ t, lang, posts, relatorios, isLoading }) => (
  <Section id="analises" title={t("posts.title")} icon={Newspaper} altBg>
    {isLoading ? (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ) : relatorios.length === 0 && posts.length === 0 ? (
      <Card>
        <p className="text-sm text-neutral-700 dark:text-neutral-200">
          {t("posts.empty")}
        </p>
      </Card>
    ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Relatórios da API */}
        {relatorios.map((relatorio) => (
          <Card key={relatorio._id}>
            {relatorio.figuraUrl && (
              <div className="mb-4">
                <img
                  src={relatorio.figuraUrl}
                  alt={relatorio.titulo}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            )}
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={relatorio.createdAt}>
                {fmtDate(relatorio.createdAt, lang)}
              </time>
            </div>
            <h3 className="font-medium leading-snug mb-2">
              {relatorio.titulo}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3">
              {relatorio.resumo}
            </p>
            <Link
              to={`/relatorio/${relatorio._id}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {t("posts.readMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}

        {/* Posts estáticos (fallback) */}
        {relatorios.length === 0 &&
          posts.map((p) => (
            <Card key={p.id}>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                <time dateTime={p.isoDate}>{fmtDate(p.isoDate, lang)}</time>
                {p.tags?.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800">
                    {p.tags[0]}
                  </span>
                )}
                {p.lang && (
                  <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800">
                    {p.lang.toUpperCase()}
                  </span>
                )}
              </div>
              <h3 className="font-medium leading-snug mb-2">
                {typeof p.title === "string"
                  ? p.title
                  : p.title[lang] || p.title.pt || p.title.en}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 line-clamp-3">
                {typeof p.summary === "string"
                  ? p.summary
                  : p.summary[lang] || p.summary.pt || p.summary.en}
              </p>
              <Link
                to={p.url}
                className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {t("posts.readMore")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
      </div>
    )}
  </Section>
);
