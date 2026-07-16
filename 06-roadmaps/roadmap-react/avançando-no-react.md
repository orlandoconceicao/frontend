# Introdução da seção

Nesta seção vamos avançar nos principais recursos do React. Você aprenderá como trabalhar com imagens, utilizar Hooks para gerenciar estado, renderizar listas, reutilizar componentes, compartilhar dados entre componentes e criar interfaces mais dinâmicas.

---

## Inserindo imagens

Imagens podem ser adicionadas utilizando arquivos públicos (`public`) ou através de importações quando estão dentro da pasta `src`.

```jsx
function App() {
  return (
    <div>
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}
```

---

## Importando imagens

Quando a imagem está na pasta `src`, ela deve ser importada antes de ser utilizada.

```jsx
import logo from "./assets/logo.png";

function App() {
  return (
    <img src={logo} alt="Logo" />
  );
}
```

---

## O que são Hooks?

Hooks são funções especiais do React que permitem utilizar recursos como estado e ciclo de vida em componentes funcionais.

Os Hooks sempre começam com `use`.

Exemplos:

- `useState`
- `useEffect`
- `useRef`
- `useContext`

```jsx
import { useState } from "react";
```

---

## Conhecendo o Hook useState

O `useState` permite criar estados dentro de um componente.

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </>
  );
}
```

Sintaxe:

```jsx
const [estado, setEstado] = useState(valorInicial);
```

---

## Renderização de lista

Podemos renderizar vários elementos utilizando o método `map()`.

```jsx
function Lista() {
  const nomes = ["Ana", "Carlos", "João"];

  return (
    <ul>
      {nomes.map((nome) => (
        <li>{nome}</li>
      ))}
    </ul>
  );
}
```

---

## A propriedade key

Toda lista renderizada com `map()` deve possuir uma propriedade `key`, que identifica exclusivamente cada elemento.

```jsx
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Carlos" }
];

function Lista() {
  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.nome}
        </li>
      ))}
    </ul>
  );
}
```

Evite utilizar o índice como `key` quando houver alterações na lista.

---

## Previous State

Quando um novo estado depende do estado anterior, utilize uma função dentro do `setState`.

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador((valorAnterior) => valorAnterior + 1);
  }

  return (
    <button onClick={incrementar}>
      {contador}
    </button>
  );
}
```

Essa abordagem evita problemas causados por atualizações assíncronas.

---

## Renderização condicional

É possível renderizar elementos apenas quando uma condição for verdadeira.

```jsx
function Usuario({ logado }) {
  return (
    <>
      {logado && <p>Bem-vindo!</p>}
    </>
  );
}
```

---

## Adicionando um else

Também podemos utilizar o operador ternário para renderizar alternativas.

```jsx
function Usuario({ logado }) {
  return (
    <>
      {logado ? (
        <p>Bem-vindo!</p>
      ) : (
        <p>Faça login.</p>
      )}
    </>
  );
}
```

---

## As props do componente

Props são dados enviados de um componente pai para um componente filho.

```jsx
function Pessoa(props) {
  return <h2>{props.nome}</h2>;
}

function App() {
  return (
    <Pessoa nome="Orlando" />
  );
}
```

---

## Desestruturando props

A desestruturação torna o código mais limpo.

```jsx
function Pessoa({ nome, idade }) {
  return (
    <>
      <h2>{nome}</h2>
      <p>{idade}</p>
    </>
  );
}
```

---

## Reaproveitamento de componente

O mesmo componente pode ser reutilizado várias vezes com props diferentes.

```jsx
function Card({ titulo }) {
  return <h2>{titulo}</h2>;
}

function App() {
  return (
    <>
      <Card titulo="Notebook" />
      <Card titulo="Celular" />
      <Card titulo="Monitor" />
    </>
  );
}
```

---

## Renderização de componentes com map

Além de elementos HTML, também podemos renderizar componentes usando `map()`.

```jsx
function Produto({ nome }) {
  return <li>{nome}</li>;
}

function App() {
  const produtos = [
    "Notebook",
    "Mouse",
    "Teclado"
  ];

  return (
    <ul>
      {produtos.map((produto) => (
        <Produto
          key={produto}
          nome={produto}
        />
      ))}
    </ul>
  );
}
```

---

## Fragments

Fragments permitem retornar vários elementos sem criar uma `<div>` extra.

```jsx
function App() {
  return (
    <>
      <h1>Título</h1>
      <p>Descrição</p>
    </>
  );
}
```

Também existe a forma completa:

```jsx
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Olá</h1>
      <p>Mundo</p>
    </Fragment>
  );
}
```

---

## Children

A propriedade `children` representa tudo o que é colocado entre as tags de um componente.

```jsx
function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

function App() {
  return (
    <Container>
      <h1>Título</h1>
      <p>Conteúdo</p>
    </Container>
  );
}
```

---

## Função em prop

Também é possível enviar funções como propriedades.

```jsx
function Botao({ executar }) {
  return (
    <button onClick={executar}>
      Clique
    </button>
  );
}

function App() {
  function mensagem() {
    alert("Executado!");
  }

  return (
    <Botao executar={mensagem} />
  );
}
```

---

## State Lift (Lifting State Up)

Quando dois componentes precisam compartilhar o mesmo estado, ele deve ficar no componente pai e ser enviado aos filhos através de props.

```jsx
import { useState } from "react";

function Input({ valor, alterar }) {
  return (
    <input
      value={valor}
      onChange={(e) => alterar(e.target.value)}
    />
  );
}

function App() {
  const [nome, setNome] = useState("");

  return (
    <>
      <Input
        valor={nome}
        alterar={setNome}
      />

      <h2>{nome}</h2>
    </>
  );
}
```

Essa técnica é conhecida como **Lifting State Up** e é uma das formas mais comuns de compartilhar estado entre componentes no React.