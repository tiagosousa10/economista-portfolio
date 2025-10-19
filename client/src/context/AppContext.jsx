import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../lib/axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const login = async ({ nome, password }) => {
    try {
      // Não precisa concatenar baseURL, axios já faz isso
      const response = await api.post("/api/auth/login", {
        nome,
        password,
      });

      // axios retorna data direto em response.data, não precisa de .json()
      const data = response.data;

      // Com axios, status 2xx é sucesso, erros vêm em error.response
      toast.success("Login realizado com sucesso!");
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Erro ao efetuar login.";
      toast.error(errorMessage);
      console.error("Erro no login:", error);
    }
  };

  const value = {
    login,
    // Adicione outras funções e estados aqui
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
