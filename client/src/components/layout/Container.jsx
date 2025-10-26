import React from "react";

// Componente Container para centralizar conteúdo
export const Container = ({ children }) => (
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{children}</div>
);

// Componente Section para seções da página
export const Section = ({ id, title, icon: Icon, children, altBg = false }) => (
  <section
    id={id}
    className={`scroll-mt-24 py-12 ${
      altBg ? "bg-neutral-50 dark:bg-neutral-900" : ""
    }`}
  >
    <Container>
      <div className="flex items-center gap-3 mb-6">
        {Icon ? <Icon className="w-5 h-5" aria-hidden /> : null}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </Container>
  </section>
);

// Componente Card para cartões de conteúdo
export const Card = ({ children }) => (
  <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 bg-white dark:bg-neutral-950 transition-[box-shadow,transform] motion-reduce:transition-none hover:shadow-lg hover:-translate-y-0.5">
    {children}
  </div>
);
