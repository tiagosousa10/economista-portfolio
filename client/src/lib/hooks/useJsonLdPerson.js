import { useEffect } from "react";
import { links } from "../../data/links";

// Hook para JSON-LD Person (dados estruturados)
export function useJsonLdPerson(lang) {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Vítor Reis",
      url: typeof window !== "undefined" ? window.location.origin : "",
      sameAs: [links.linkedin, links.github],
      jobTitle: lang === "pt" ? "Economista" : "Economist",
    };

    let s = document.getElementById("ld-person");
    if (!s) {
      s = document.createElement("script");
      s.id = "ld-person";
      s.type = "application/ld+json";
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify(data);
  }, [lang]);
}
