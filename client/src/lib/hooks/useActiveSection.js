import { useEffect, useState } from "react";

// Hook para realce do link ativo na navegação (com debounce)
export function useActiveSection() {
  const [active, setActive] = useState("#sobre");

  useEffect(() => {
    const sections = ["#sobre", "#cv", "#analises", "#contacto"];

    const onScroll = () => {
      let curr = "#sobre";
      for (const id of sections) {
        const el = document.querySelector(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) curr = id;
      }
      setActive(curr);
    };

    let t;
    const handler = () => {
      clearTimeout(t);
      t = setTimeout(onScroll, 80);
    };

    onScroll();
    window.addEventListener("scroll", handler, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return active;
}
