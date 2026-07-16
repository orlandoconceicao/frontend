# CSS no React

Nesta seção você vai ver diferentes formas de aplicar estilos em aplicações React: desde CSS global até CSS Modules, passando por estilos inline e classes dinâmicas.

## CSS global

O CSS global é definido em um arquivo único que aplica estilos a toda a aplicação. Em um projeto React criado com Vite ou Create React App, normalmente há um arquivo como `index.css` ou `App.css`.

Exemplo de arquivo global:

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

h1, h2, h3 {
  color: #333;
}

button {
  font-family: inherit;
}
```

Importe o CSS global no ponto de entrada do app:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

O CSS global é útil para reset, tipografia e estilos que devem ser compartilhados por toda a aplicação.

## CSS de componentes

Cada componente pode ter seu próprio arquivo CSS. Essa abordagem facilita organizar estilos por funcionalidade e manter o código mais legível.

Exemplo de componente com CSS de componente:

`Button.css`
```css
.button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056d6;
}
```

`Button.jsx`
```jsx
import './Button.css';

function Button({ children }) {
  return <button className="button">{children}</button>;
}

export default Button;
```

## Estilos inline

Estilos inline são definidos diretamente no elemento. No React, o atributo `style` recebe um objeto JavaScript.

```jsx
function Card() {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ margin: 0 }}>Título do card</h2>
      <p style={{ color: '#555' }}>Conteúdo do card.</p>
    </div>
  );
}
```

Estilos inline são úteis para ajustes rápidos ou quando o estilo depende de variáveis locais, mas não são recomendados para todo o layout por causa da falta de reutilização.

## CSS inline dinâmico

Você pode criar objetos de estilo dinamicamente e usar valores que mudam com base em props ou estado.

```jsx
function Badge({ status }) {
  const style = {
    padding: '0.5rem 0.75rem',
    borderRadius: '999px',
    color: '#fff',
    backgroundColor: status === 'ativo' ? '#28a745' : '#6c757d',
  };

  return <span style={style}>{status}</span>;
}
```

Esse padrão é útil quando o estilo depende diretamente de uma condição, como tema, status ou valores dinâmicos.

## Classes dinâmicas

Em vez de estilos inline, você pode trocar classes CSS dinamicamente. No React, isso é feito normalmente com template literals ou arrays.

```jsx
function Alert({ type, message }) {
  const className = `alert ${type === 'erro' ? 'alert-error' : 'alert-success'}`;

  return <div className={className}>{message}</div>;
}
```

Exemplo de CSS:

```css
.alert {
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
}

.alert-error {
  background-color: #f8d7da;
  color: #721c24;
}
```

Classes dinâmicas são excelentes para alterar aparência sem criar muitos objetos de estilo inline.

## CSS Modules

CSS Modules permitem escrever CSS com escopo local para cada componente, evitando conflitos de nomes entre classes.

Exemplo de `Button.module.css`:

```css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
}
```

Uso no componente:

```jsx
import styles from './Button.module.css';

function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
```

Com CSS Modules, o nome gerado para a classe fica isolado daquele componente, o que ajuda a manter um estilo mais seguro e previsível.
