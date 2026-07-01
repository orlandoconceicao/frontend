# Roadmap de React

## O que é React JS?
React é uma biblioteca JavaScript usada para construir interfaces de usuário, principalmente aplicações web com componentes reutilizáveis.

## Dependências do React
Para começar a trabalhar com React, é importante ter instalado:
- Node.js
- npm ou yarn
- Um editor de código como o VS Code

Exemplo de instalação:
```bash
npm create vite@latest meu-app --template react
cd meu-app
npm install
npm run dev
```

## Hello World em React
O primeiro exemplo simples de React costuma exibir uma mensagem na tela, como "Hello World".

```jsx
import React from 'react';

function App() {
  return <h1>Hello World</h1>;
}

export default App;
```

## Estrutura do React
A estrutura básica de um projeto React envolve:
- componentes
- JSX
- props
- estado

Exemplo de componente simples:
```jsx
function Saudacao(props) {
  return <h2>Olá, {props.nome}!</h2>;
}
```

## Extensão do VS Code para React
Algumas extensões podem ajudar no desenvolvimento com React, como:
- ES7+ React/Redux/React-Native snippets
- Prettier
- ESLint

## Configurando o Emmet para o React
O Emmet pode facilitar a escrita de código em JSX e HTML dentro do VS Code, tornando o desenvolvimento mais rápido.


