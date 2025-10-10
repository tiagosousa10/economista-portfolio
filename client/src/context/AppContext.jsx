import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../lib/axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const login = async ({ nome, password }) => {
    try {
      const response = await api.post(
        `${process.env.API_BASE_URL}/api/auth/login`,
        {
          nome,
          password,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error("Erro ao efetuar login.");
        return;
      }

      return data;
    } catch (error) {
      toast.error("Erro ao efetuar login.");
    }
  };

  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
