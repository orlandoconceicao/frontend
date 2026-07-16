# Introdução da seção

React é uma biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis. Nesta seção aprenderemos os fundamentos essenciais para começar a trabalhar com React.


## Criando o primeiro componente

Um componente em React é uma função que retorna JSX (elementos React). Pode ser criado como função ou classe.

```jsx
// Componente funcional
function Saudacao() {
  return <h1>Olá, mundo!</h1>;
}

export default Saudacao;
```


## Importando componentes

Para usar componentes em outros arquivos, você precisa importá-los usando a sintaxe ES6 de módulos.

```jsx
import Saudacao from './Saudacao';
import { OutroComponente } from './OutroComponente';

function App() {
  return <Saudacao />;
}
```


## JSX

JSX é uma sintaxe que permite escrever HTML dentro do JavaScript. É transpilada para chamadas de funções React.

```jsx
// JSX
const elemento = <div className="container">Conteúdo</div>;

// Equivalente em JavaScript puro
const elemento2 = React.createElement('div', { className: 'container' }, 'Conteúdo');
```


## Comentários

Em JSX, comentários devem ser escritos dentro de chaves usando a sintaxe de comentário JavaScript.

```jsx
function Componente() {
  return (
    <div>
      {/* Comentário em JSX */}
      <p>Texto visível</p>
      // Este comentário NÃO funciona em JSX
    </div>
  );
}
```


## Template expressions

Expressões JavaScript podem ser incluídas em JSX usando chaves `{}`.

```jsx
function Mensagem() {
  const nome = 'João';
  const idade = 25;
  
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Próximo ano: {idade + 1}</p>
    </div>
  );
}
```


## Hierarquia de componentes

Componentes podem ser aninhados para criar estruturas complexas. Um componente pai passa dados para componentes filhos.

```jsx
function App() {
  return (
    <div>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>Cabeçalho</header>;
}
```


## Evento de click

Você pode adicionar eventos aos elementos JSX usando camelCase.

```jsx
function Botao() {
  const handleClick = () => {
    console.log('Botão clicado!');
  };
  
  return <button onClick={handleClick}>Clique aqui</button>;
}
```


## Evento com função

Eventos podem executar funções definidas ou passadas como props.

```jsx
function Card({ onDelete }) {
  return (
    <div>
      <p>Conteúdo do card</p>
      <button onClick={onDelete}>Deletar</button>
    </div>
  );
}

// Uso
<Card onDelete={() => console.log('Deletado')} />
```

## Função de renderização


React renderiza componentes na página usando `ReactDOM.createRoot()`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

