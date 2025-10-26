import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// Hook para gerenciar tema (dark/light) com persistência
export function useTheme() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [dark, setDark] = useLocalStorage("theme_dark", prefersDark);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return { dark, setDark };
}
