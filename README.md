# Ghibli Explorer 🌿

Uma aplicação web para explorar filmes do **Studio Ghibli**, conhecer suas histórias e descobrir informações sobre suas produções.

Desenvolvido com **React, TypeScript e Tailwind CSS**, o projeto apresenta uma interface responsiva inspirada na atmosfera acolhedora e natural dos filmes do estúdio.

## Demonstração online

Acesse o Ghibli Explorer:

🌿 [Visualizar aplicação](https://matvolotao.github.io/ghibli-explorer/)

## Funcionalidades

- Listagem dos 10 primeiros filmes em ordem alfabética.
- Exibição de banners e títulos dos filmes.
- Navegação entre o catálogo e as páginas de detalhes.
- Página individual com sinopse, diretor, produtor, ano de lançamento e avaliação do Rotten Tomatoes.
- Estados de carregamento e tratamento de erros.
- Cancelamento de requisições pendentes com `AbortController`.
- Interface responsiva para dispositivos móveis, tablets e desktops.
- Navegação com React Router.

## Tecnologias utilizadas

- **React** — Construção da interface e dos componentes.
- **TypeScript** — Tipagem estática e organização dos contratos de dados.
- **Vite** — Ambiente de desenvolvimento e build.
- **Tailwind CSS v4** — Estilização e responsividade.
- **React Router** — Navegação entre páginas.
- **Studio Ghibli API** — Fonte de informações sobre os filmes.

## Estrutura do projeto

```text
src/
├── components/
│   └── FilmCard.tsx
├── hooks/
│   ├── useFilm.ts
│   └── useFilms.ts
├── pages/
│   ├── FilmDetails.tsx
│   └── Home.tsx
├── routes/
│   └── AppRoutes.tsx
├── services/
│   └── ghibliApi.ts
├── types/
│   └── film.ts
├── App.tsx
├── index.css
└── main.tsx
```

### Organização da arquitetura

O projeto utiliza separação de responsabilidades:

- **Components:** componentes visuais reutilizáveis.
- **Pages:** páginas e apresentação dos dados.
- **Hooks:** gerenciamento de estados, efeitos e ciclo de vida das requisições.
- **Services:** comunicação com a API.
- **Routes:** configuração das rotas da aplicação.
- **Types:** interfaces TypeScript para representar os dados.

## Como executar localmente

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado para clonar o repositório.

### Instalação

Clone o repositório:

```bash
git clone https://github.com/MatVolotao/ghibli-explorer.git
```

Entre na pasta:

```bash
cd ghibli-explorer
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço indicado pelo Vite no terminal, normalmente:

`http://localhost:5173/`

### Verificações de qualidade

```bash
npm run lint
npm run build
```

O build de produção é gerado na pasta `dist/`.

## API utilizada

Os dados dos filmes são obtidos pela **Studio Ghibli API**:

https://ghibliapi.vercel.app/

A aplicação utiliza os endpoints de listagem e consulta individual de filmes.

## Objetivo do projeto

Este projeto foi desenvolvido para praticar e consolidar conhecimentos de desenvolvimento frontend, incluindo:

- Consumo de APIs REST.
- Componentização em React.
- Custom Hooks.
- React Router e rotas dinâmicas.
- Gerenciamento de estados assíncronos.
- Tratamento de erros e cancelamento de requisições.
- Estilização responsiva com Tailwind CSS.
- Organização de código e separação de responsabilidades.

## Créditos

As obras, personagens e imagens pertencem aos seus respectivos titulares.

Projeto independente, desenvolvido para fins educacionais e de portfólio, sem afiliação oficial com o Studio Ghibli.
