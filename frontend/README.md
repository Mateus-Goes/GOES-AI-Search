# GOES-AI-Search Frontend

## Visão Geral

GOES-AI-Search é uma aplicação web moderna e retrô para busca inteligente, integrando pesquisa Google, scraping e sumarização via IA. O frontend é feito em React, com foco em usabilidade, visual retrô estiloso, e experiência de usuário aprimorada.

---

## Funcionalidades Principais
- **Busca inteligente:** Campo de busca centralizado, com botão estiloso, para pesquisar qualquer termo.
- **Histórico de buscas:** Barra lateral à esquerda mostra buscas anteriores (simulada, pronto para integração real).
- **Resultados e referências:** Resultados exibidos em estilo retrô, com destaque para links e sumarização automática.
- **Dark Mode:** Toggle fixo no topo direito, com transição suave e design elegante.
- **Logo GOES:** Logo centralizada, grande e com sombra dinâmica para cada tema.
- **Exportação:** Botão para exportar o resumo gerado (simulado, pronto para integração real).
- **Responsividade:** Layout adaptável para diferentes tamanhos de tela.

---

## Estrutura dos Arquivos Principais

- **App.js**
  - Componente raiz. Gerencia estado global (query, summary, loading, darkMode).
  - Integra todos os componentes principais.
  - Controla o tema do body via classe CSS.

- **components/GoesLogo.jsx**
  - Exibe a logo GOES centralizada, com sombra adaptativa (claro/escuro).
  - Ajuste fino de margens para máxima aproximação com a barra de busca.

- **components/SearchBar.jsx**
  - Campo de busca e botão "Pesquisar" estilizados.
  - Suporte a dark mode.
  - Chama função de busca ao clicar.

- **components/Results.jsx**
  - Mostra os links de referência e o resumo gerado pela IA.
  - Estilo retrô, com destaque para links e caixa de resumo.
  - Suporte a dark mode.

- **components/History.jsx**
  - Barra lateral de histórico de buscas.
  - Visual retrô, pronto para integração com backend.
  - Suporte a dark mode.

- **components/ExportButton.jsx**
  - Botão para exportar o resumo em TXT.
  - Desabilitado se não houver resumo.
  - Suporte a dark mode.

- **components/DarkModeToggle.jsx**
  - Toggle visual fixo no topo direito, com animação suave e design minimalista.
  - Sempre visível, independente do conteúdo.

- **index.css**
  - Estilos globais do app.
  - Define temas claro/escuro via classes no body.
  - Remove margens/paddings extras e garante transições suaves.

---

## Como Rodar o Projeto

1. Instale dependências:
   ```bash
   npm install
   ```
2. Rode o app:
   ```bash
   npm start
   ```
3. Acesse em [http://localhost:3000](http://localhost:3000)

---

## Documentação dos Componentes Customizados

### `<GoesLogo darkMode={darkMode} />`
- Props:
  - `darkMode` (bool): ajusta a sombra do logo conforme o tema.
- Dica: margens negativas permitem aproximação máxima da SearchBar.

### `<SearchBar query setQuery onSearch loading darkMode />`
- Props:
  - `query`, `setQuery`, `onSearch`, `loading`, `darkMode`.
- Visual retrô, responsivo e adaptado para dark mode.

### `<Results summary keywords darkMode />`
- Props:
  - `summary`, `keywords`, `darkMode`.
- Exibe referências e resumo com destaque visual.

### `<History history onSelect darkMode />`
- Props:
  - `history`, `onSelect`, `darkMode`.
- Simula histórico de buscas.

### `<ExportButton summary disabled darkMode />`
- Props:
  - `summary`, `disabled`, `darkMode`.
- Exporta o resumo como TXT (simulado).

### `<DarkModeToggle darkMode setDarkMode />`
- Props:
  - `darkMode`, `setDarkMode`.
- Toggle visual fixo no topo direito, sempre visível.

---

## Estado Atual dos Arquivos
- **Totalmente funcional:**
  - App.js, GoesLogo.jsx, SearchBar.jsx, Results.jsx, DarkModeToggle.jsx, index.css
- **Pronto para integração backend:**
  - History.jsx, ExportButton.jsx
- **Assets:**
  - Logo PNG otimizada, sem áreas transparentes.

---

## Próximos Passos Sugeridos
- Integrar backend FastAPI para busca real e sumarização.
- Salvar histórico real do usuário.
- Melhorar responsividade mobile.
- Adicionar testes automatizados.

---

## Contato
Desenvolvido por Mateus Goes.

