# Estrutura de Componentes - Economista Website

Este documento descreve a nova estrutura modular do projeto após a refatoração do arquivo `Home.jsx`.

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── layout/
│   │   ├── Container.jsx      # Componentes de layout básicos
│   │   ├── Nav.jsx           # Barra de navegação
│   │   ├── Footer.jsx        # Rodapé
│   │   └── index.js          # Exports dos componentes de layout
│   ├── sections/
│   │   ├── Hero.jsx          # Seção hero/principal
│   │   ├── SecSobre.jsx      # Seção "Sobre mim"
│   │   ├── SecCV.jsx         # Seção CV
│   │   ├── SecAnalises.jsx   # Seção análises/relatórios
│   │   ├── SecContacto.jsx   # Seção de contacto
│   │   └── index.js          # Exports dos componentes de seções
│   └── index.js              # Export principal de todos os componentes
├── data/
│   ├── links.js              # Links externos e internos
│   ├── postsBase.js          # Posts estáticos (fallback)
│   ├── skills.js             # Lista de competências e idiomas
│   ├── translations.js       # Dicionário de traduções (i18n)
│   └── index.js              # Export principal dos dados
├── lib/
│   └── hooks/
│       ├── useLocalStorage.js # Hook para localStorage
│       ├── useTheme.js        # Hook para tema dark/light
│       ├── useI18n.js         # Hook para internacionalização
│       ├── useHtmlLang.js     # Hook para idioma do HTML
│       ├── useSeo.js          # Hook para SEO dinâmico
│       ├── useJsonLdPerson.js # Hook para dados estruturados
│       ├── useActiveSection.js # Hook para navegação ativa
│       └── index.js           # Export principal dos hooks
├── utils/
│   ├── dateUtils.js          # Funções utilitárias para datas
│   └── index.js              # Export principal das utils
└── pages/
    └── Home.jsx              # Página principal (refatorada)
```

## 🔧 Componentes Principais

### Layout Components

- **Container**: Wrapper centralizado com max-width
- **Section**: Seção com título e ícone opcional
- **Card**: Cartão com bordas e hover effects
- **Nav**: Barra de navegação com tema e idioma
- **Footer**: Rodapé com links e copyright

### Section Components

- **Hero**: Seção principal com apresentação
- **SecSobre**: Seção "Sobre mim" com skills
- **SecCV**: Seção CV com educação, experiência e competências
- **SecAnalises**: Seção de análises/relatórios (API + fallback)
- **SecContacto**: Formulário de contacto

## 🎣 Hooks Customizados

- **useLocalStorage**: Gerencia localStorage com tratamento de erros
- **useTheme**: Gerencia tema dark/light com persistência
- **useI18n**: Gerencia internacionalização (PT/EN)
- **useHtmlLang**: Define idioma do HTML dinamicamente
- **useSeo**: Gerencia meta tags e SEO dinâmico
- **useJsonLdPerson**: Adiciona dados estruturados JSON-LD
- **useActiveSection**: Realça seção ativa na navegação

## 📊 Dados Estáticos

- **links**: URLs externas e internas
- **postsBase**: Posts estáticos como fallback
- **skills**: Lista de competências e idiomas
- **translations**: Dicionário completo de traduções

## 🛠️ Utilitários

- **fmtDate**: Formata datas localizadas (PT/EN)

## ✅ Benefícios da Refatoração

1. **Modularidade**: Cada componente tem responsabilidade única
2. **Reutilização**: Componentes podem ser reutilizados facilmente
3. **Manutenibilidade**: Mais fácil de encontrar e corrigir bugs
4. **Testabilidade**: Componentes isolados são mais fáceis de testar
5. **Escalabilidade**: Estrutura preparada para crescimento
6. **Organização**: Código bem organizado por funcionalidade
7. **Imports Limpos**: Imports organizados e fáceis de entender

## 🚀 Como Usar

O arquivo `Home.jsx` agora é muito mais limpo e focado apenas na lógica principal:

```jsx
import React, { useEffect, useMemo, useState } from "react";
import { api } from "../lib/axios";
import {
  useTheme,
  useI18n,
  useHtmlLang,
  useSeo,
  useJsonLdPerson,
  useActiveSection,
} from "../lib/hooks";
import {
  Nav,
  Hero,
  SecSobre,
  SecCV,
  SecAnalises,
  SecContacto,
  Footer,
} from "../components";
import { postsBase } from "../data";

export default function EconomistaSiteBase() {
  // Hooks e estado
  // Lógica de negócio
  // Renderização simplificada
}
```

Esta estrutura torna o código muito mais fácil de manter, debugar e expandir!
