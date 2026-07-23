# React Router (React Router DOM)

## Introdução da seção

O **React Router DOM** é a biblioteca oficial para criar navegação entre páginas em aplicações React do tipo **SPA (Single Page Application)**. Em vez de recarregar toda a página a cada clique, ele altera apenas os componentes necessários, proporcionando uma navegação rápida e fluida.

---

## Problemas com a versão atualizada do JSON Server

As versões mais recentes do **JSON Server** mudaram alguns comportamentos, podendo causar incompatibilidades com cursos mais antigos.

### Problemas comuns

- Alteração na forma de iniciar o servidor;
- Mudanças em algumas rotas;
- Erros ao usar versões recentes.

### Solução

Instale uma versão compatível:

```bash
npm install json-server@0.17.4
```

Crie um script no `package.json`:

```json
"scripts": {
  "server": "json-server --watch db.json --port 3000"
}
```

Execute:

```bash
npm run server
```

---

## O que é React Router?

O **React Router DOM** é a biblioteca responsável pelo sistema de rotas em aplicações React.

Sem React Router:

```text
site.com
```

Com React Router:

```text
site.com/
site.com/produtos
site.com/contato
site.com/perfil/10
```

Mesmo com várias páginas, a aplicação continua sendo uma **SPA**, sem recarregar o navegador.

### Instalação

```bash
npm install react-router-dom
```

---

## Configurando o React Router

Primeiro, envolva toda a aplicação com o `BrowserRouter`.

```jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

Depois, defina as rotas.

```jsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

---

## Configurando página de erro

Crie uma rota para páginas inexistentes.

```jsx
<Route path="*" element={<NotFound />} />
```

Exemplo:

```jsx
function NotFound() {
  return <h1>Página não encontrada</h1>;
}
```

---

## Criando um Layout compartilhado

Um **Layout** é um componente reutilizado por todas as páginas.

Estrutura:

```text
Navbar
Conteúdo
Footer
```

`Layout.jsx`

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
```

Configuração das rotas:

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
```

O componente `Outlet` indica onde as rotas filhas serão renderizadas.

---

## Links entre páginas

Evite utilizar:

```html
<a href="/about">Sobre</a>
```

Pois isso recarrega toda a aplicação.

Utilize:

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>

<Link to="/about">Sobre</Link>
```

---

## Carregando dados

O React Router possui **Loaders**, que carregam dados antes da renderização da página.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const response = await fetch("http://localhost:3000/products");
      return response.json();
    },
  },
]);
```

Na página:

```jsx
import { useLoaderData } from "react-router-dom";

function Home() {
  const products = useLoaderData();

  return (
    <>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </>
  );
}
```

---

## Rotas dinâmicas

São utilizadas para páginas de detalhes.

Exemplos:

```text
/produto/1
/produto/5
/produto/20
```

Configuração:

```jsx
<Route path="/product/:id" element={<Product />} />
```

Obtendo o parâmetro:

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <h1>Produto {id}</h1>;
}
```

---

## Rotas aninhadas

Permitem organizar páginas dentro de um mesmo Layout.

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
</Route>
```

As páginas serão renderizadas dentro do `Outlet`.

---

## Link ativo

O componente `NavLink` permite identificar a página atual.

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/">Home</NavLink>

<NavLink to="/about">Sobre</NavLink>
```

Aplicando uma classe quando estiver ativo:

```jsx
<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Sobre
</NavLink>
```

CSS:

```css
.active {
  color: red;
  font-weight: bold;
}
```

---

## Search Params

Os **Search Params** são parâmetros enviados na URL.

Exemplos:

```text
/search?q=notebook
/search?categoria=react
/search?page=2
```

Lendo os parâmetros:

```jsx
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  return <h1>{query}</h1>;
}
```

URL:

```text
localhost:5173/search?q=react
```

Resultado:

```text
react
```

---

## Redirecionamentos

Redirecionando utilizando `Navigate`.

```jsx
import { Navigate } from "react-router-dom";

<Route
  path="/admin"
  element={
    usuarioLogado ? <Admin /> : <Navigate to="/login" />
  }
/>
```

Utilizando `useNavigate`.

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function entrar() {
    navigate("/");
  }
}
```

Voltar uma página:

```jsx
navigate(-1);
```

Avançar uma página:

```jsx
navigate(1);
```

---

## Resumo

Nesta seção você aprendeu:

- Instalar o React Router DOM;
- Configurar o `BrowserRouter`;
- Criar rotas com `Routes` e `Route`;
- Criar uma página de erro;
- Criar um Layout compartilhado com `Outlet`;
- Navegar entre páginas com `Link`;
- Destacar a rota ativa com `NavLink`;
- Trabalhar com rotas dinâmicas utilizando `useParams`;
- Criar rotas aninhadas;
- Ler parâmetros da URL com `useSearchParams`;
- Carregar dados antes da renderização com `loader` e `useLoaderData`;
- Fazer redirecionamentos com `Navigate` e `useNavigate`.

## Principais componentes e hooks

| Recurso | Descrição |
|---------|-----------|
| `BrowserRouter` | Habilita o sistema de rotas |
| `Routes` | Agrupa as rotas |
| `Route` | Define uma rota |
| `Link` | Navegação sem recarregar a página |
| `NavLink` | Link que identifica a rota ativa |
| `Outlet` | Renderiza rotas filhas |
| `useParams()` | Obtém parâmetros da URL |
| `useNavigate()` | Navegação programática |
| `Navigate` | Redireciona para outra rota |
| `useSearchParams()` | Manipula parâmetros da URL |
| `useLoaderData()` | Obtém dados carregados pelo loader |

> **Resumo geral:** O React Router DOM permite criar aplicações React com múltiplas páginas mantendo o comportamento de uma SPA, oferecendo navegação rápida, rotas dinâmicas, layouts compartilhados, carregamento de dados e redirecionamentos.