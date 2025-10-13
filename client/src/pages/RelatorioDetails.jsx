import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Moon, Sun, Home } from "lucide-react";
import { api } from "../lib/axios";

const RelatorioDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [relatorio, setRelatorio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Verificar tema atual
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  // Buscar relatório específico
  useEffect(() => {
    const fetchRelatorio = async () => {
      try {
        const response = await api.get(`api/relatorios/${id}`);
        if (response.data.success) {
          setRelatorio(response.data.relatorio);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("Erro ao carregar relatório:", error);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchRelatorio();
    }
  }, [id, navigate]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme_dark", JSON.stringify(newDarkMode));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!relatorio) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Relatório não encontrado
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <header className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
              <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                <Home className="w-4 h-4" />
                Início
              </Link>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Alternar tema"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <article className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
          {/* Imagem do relatório */}
          {relatorio.figuraUrl && (
            <div className="aspect-video w-full">
              <img
                src={relatorio.figuraUrl}
                alt={relatorio.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Metadados */}
            <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={relatorio.createdAt}>
                  {formatDate(relatorio.createdAt)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Vítor Reis</span>
              </div>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
              {relatorio.titulo}
            </h1>

            {/* Resumo */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {relatorio.resumo}
              </p>
            </div>

            {/* Conteúdo principal */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-neutral-800 dark:text-neutral-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: relatorio.texto }}
              />
            </div>
          </div>
        </article>
        {/* Navegação */}
        {/* <div className="mt-8 flex justify-center">
          <Link
            to="/#analises"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver mais relatórios
          </Link>
        </div> */}
      </main>
    </div>
  );
};

export default RelatorioDetails;
