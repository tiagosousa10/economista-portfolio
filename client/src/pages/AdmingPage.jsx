import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  FileText,
  Search,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Calendar,
  User,
  Moon,
  Sun,
  Home,
  Settings,
  BarChart3,
  FolderOpen,
} from "lucide-react";
import { toast } from "react-toastify";
import { api } from "../lib/axios";

const AdmingPage = () => {
  const [relatorios, setRelatorios] = useState([]);
  const [filteredRelatorios, setFilteredRelatorios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("relatorios");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingRelatorio, setEditingRelatorio] = useState(null);
  const [newRelatorio, setNewRelatorio] = useState({
    titulo: "",
    resumo: "",
    texto: "",
  });
  const navigate = useNavigate();

  // Verificar tema atual
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  // Carregar relatórios
  useEffect(() => {
    fetchRelatorios();
  }, []);

  // Filtrar relatórios baseado na pesquisa
  useEffect(() => {
    const filtered = relatorios.filter(
      (relatorio) =>
        relatorio.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        relatorio.resumo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRelatorios(filtered);
  }, [searchTerm, relatorios]);

  const fetchRelatorios = async () => {
    try {
      const response = await api.get("api/relatorios");
      if (response.data.success) {
        setRelatorios(response.data.relatorio);
      }
    } catch (error) {
      toast.error("Erro ao carregar relatórios");
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleLogout = async () => {
    try {
      await api.post("api/auth/logout");
      toast.success("Logout efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Erro ao fazer logout");
    }
  };

  const handleCreateRelatorio = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("api/relatorios", newRelatorio);
      if (response.data.success) {
        toast.success("Relatório criado com sucesso!");
        setShowCreateModal(false);
        setNewRelatorio({ titulo: "", resumo: "", texto: "" });
        fetchRelatorios();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Erro ao criar relatório");
    }
  };

  const handleEditRelatorio = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(
        `api/relatorios/${editingRelatorio._id}`,
        editingRelatorio
      );
      if (response.data.success) {
        toast.success("Relatório atualizado com sucesso!");
        setShowEditModal(false);
        setEditingRelatorio(null);
        fetchRelatorios();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Erro ao atualizar relatório"
      );
    }
  };

  const handleDeleteRelatorio = async (id) => {
    if (window.confirm("Tem certeza que deseja remover este relatório?")) {
      try {
        const response = await api.delete(`api/relatorios/${id}`);
        if (response.data.success) {
          toast.success("Relatório removido com sucesso!");
          fetchRelatorios();
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Erro ao remover relatório"
        );
      }
    }
  };

  const openEditModal = (relatorio) => {
    setEditingRelatorio({ ...relatorio });
    setShowEditModal(true);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const menuItems = [
    { id: "dashboard", label: "Painel de Controlo", icon: BarChart3 },
    { id: "relatorios", label: "Meus Relatórios", icon: FileText },
    { id: "arquivos", label: "Arquivos", icon: FolderOpen },
    { id: "configuracoes", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-700 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Painel Admin
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col h-full">
          <div className="flex-1 px-3 py-6">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer da sidebar com logout e tema */}
          <div className="px-3 py-4 border-t border-neutral-200 dark:border-neutral-700">
            <div className="space-y-2">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                {darkMode ? "Tema Claro" : "Tema Escuro"}
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sair
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="ml-0 transition-all duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-30">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {menuItems.find((item) => item.id === activeSection)?.label ||
                  "Painel Admin"}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              {activeSection === "relatorios" && (
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {filteredRelatorios.length} relatório(s)
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {/* Renderizar conteúdo baseado na seção ativa */}
          {activeSection === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Total de Relatórios
                      </p>
                      <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        {relatorios.length}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                      <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Este Mês
                      </p>
                      <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        {
                          relatorios.filter((r) => {
                            const date = new Date(r.createdAt);
                            const now = new Date();
                            return (
                              date.getMonth() === now.getMonth() &&
                              date.getFullYear() === now.getFullYear()
                            );
                          }).length
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                      <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Utilizador
                      </p>
                      <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                        Admin
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Relatórios Recentes
                </h3>
                {relatorios.length === 0 ? (
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Nenhum relatório criado ainda.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {relatorios.slice(0, 5).map((relatorio) => (
                      <div
                        key={relatorio._id}
                        className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl"
                      >
                        <div>
                          <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {relatorio.titulo}
                          </p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            {formatDate(relatorio.createdAt)}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setActiveSection("relatorios");
                            openEditModal(relatorio);
                          }}
                          className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSection === "relatorios" && (
            <div className="space-y-6">
              {/* Search bar e botão criar */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Pesquisar relatórios..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Novo Relatório
                </button>
              </div>

              {/* Cards de relatórios */}
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : filteredRelatorios.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-neutral-400" />
                  <h3 className="mt-2 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Nenhum relatório encontrado
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {searchTerm
                      ? "Tente ajustar os termos de pesquisa."
                      : "Comece criando um novo relatório."}
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredRelatorios.map((relatorio) => (
                    <div
                      key={relatorio._id}
                      className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                            {relatorio.titulo}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                            {relatorio.resumo}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(relatorio.createdAt)}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEditModal(relatorio)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteRelatorio(relatorio._id)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remover
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSection === "arquivos" && (
            <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Gestão de Arquivos
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Esta funcionalidade estará disponível em breve.
              </p>
            </div>
          )}

          {activeSection === "configuracoes" && (
            <div className="bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Configurações
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400">
                Esta funcionalidade estará disponível em breve.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Modal Criar Relatório */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowCreateModal(false)}
            />

            <div className="inline-block align-bottom bg-white dark:bg-neutral-950 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleCreateRelatorio}>
                <div className="bg-white dark:bg-neutral-950 px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Criar Novo Relatório
                  </h3>
                </div>

                <div className="bg-white dark:bg-neutral-950 px-6 py-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Título
                    </label>
                    <input
                      type="text"
                      required
                      value={newRelatorio.titulo}
                      onChange={(e) =>
                        setNewRelatorio({
                          ...newRelatorio,
                          titulo: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Resumo
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newRelatorio.resumo}
                      onChange={(e) =>
                        setNewRelatorio({
                          ...newRelatorio,
                          resumo: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Texto
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={newRelatorio.texto}
                      onChange={(e) =>
                        setNewRelatorio({
                          ...newRelatorio,
                          texto: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900 px-6 py-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                  >
                    Criar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar Relatório */}
      {showEditModal && editingRelatorio && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setShowEditModal(false)}
            />

            <div className="inline-block align-bottom bg-white dark:bg-neutral-950 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleEditRelatorio}>
                <div className="bg-white dark:bg-neutral-950 px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Editar Relatório
                  </h3>
                </div>

                <div className="bg-white dark:bg-neutral-950 px-6 py-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Título
                    </label>
                    <input
                      type="text"
                      required
                      value={editingRelatorio.titulo}
                      onChange={(e) =>
                        setEditingRelatorio({
                          ...editingRelatorio,
                          titulo: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Resumo
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={editingRelatorio.resumo}
                      onChange={(e) =>
                        setEditingRelatorio({
                          ...editingRelatorio,
                          resumo: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Texto
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={editingRelatorio.texto}
                      onChange={(e) =>
                        setEditingRelatorio({
                          ...editingRelatorio,
                          texto: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-900 px-6 py-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                  >
                    Atualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmingPage;
