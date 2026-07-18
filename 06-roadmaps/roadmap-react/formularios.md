# Formulários no React

## Introdução
Os formulários são utilizados para capturar dados digitados pelo usuário, como nome, e-mail, senha, comentários e opções de seleção.

No React, normalmente os formulários são controlados pelo estado (`useState`), permitindo validar, manipular e enviar os dados facilmente.

---

# Criando um formulário

A estrutura básica de um formulário utiliza a tag `<form>` juntamente com inputs e um botão de envio.

```jsx
function App() {
  return (
    <form>
      <input type="text" placeholder="Digite seu nome" />
      <button>Enviar</button>
    </form>
  );
}

export default App;
```

---

# Label envolvendo input

A melhor prática de acessibilidade é envolver o input com uma label ou utilizar `htmlFor`.

Exemplo envolvendo o input:

```jsx
function App() {
  return (
    <form>
      <label>
        Nome:
        <input type="text" />
      </label>
    </form>
  );
}
```

Exemplo utilizando `htmlFor`:

```jsx
function App() {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" />
    </form>
  );
}
```

---

# Salvando dados de input em State

Para armazenar o valor digitado pelo usuário utiliza-se o Hook `useState`.

```jsx
import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");

  return (
    <form>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <p>{nome}</p>
    </form>
  );
}

export default App;
```

### Explicação

- `value` mostra o valor atual.
- `onChange` é executado sempre que o usuário digita.
- `e.target.value` representa o texto digitado.

---

# Simplificando a manipulação

Quando existem vários campos, pode-se utilizar um único estado do tipo objeto.

```jsx
import { useState } from "react";

function App() {

  const [dados, setDados] = useState({
    nome: "",
    email: ""
  });

  function handleChange(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>

      <input
        name="nome"
        value={dados.nome}
        onChange={handleChange}
      />

      <input
        name="email"
        value={dados.email}
        onChange={handleChange}
      />

    </form>
  );
}

export default App;
```

### Vantagens

- Um único estado.
- Apenas uma função para atualizar todos os campos.
- Escala melhor em formulários grandes.

---

# Envio de formulário

Quando um formulário é enviado, o navegador recarrega a página.

No React usamos `preventDefault()` para impedir esse comportamento.

```jsx
import { useState } from "react";

function App() {

  const [nome, setNome] = useState("");

  function enviar(e) {
    e.preventDefault();

    console.log(nome);
  }

  return (
    <form onSubmit={enviar}>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button type="submit">
        Enviar
      </button>

    </form>
  );
}

export default App;
```

---

# Controlled Inputs

Um **Controlled Input** é um input cujo valor é totalmente controlado pelo React através do estado.

```jsx
const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Características

- O React controla o valor.
- Facilita validações.
- Facilita máscaras.
- Facilita integração com APIs.

---

# Uncontrolled Inputs

São inputs controlados diretamente pelo navegador.

```jsx
<input type="text" />
```

Também podem ser acessados utilizando `useRef`.

```jsx
import { useRef } from "react";

function App(){

    const input = useRef();

    function mostrar(){
        alert(input.current.value);
    }

    return(
        <>
            <input ref={input}/>
            <button onClick={mostrar}>
                Mostrar
            </button>
        </>
    )
}
```

Na maioria dos projetos React utiliza-se **Controlled Inputs**.

---

# Limpando formulários

Após enviar os dados, basta redefinir o estado.

```jsx
const [nome, setNome] = useState("");

function enviar(e){

    e.preventDefault();

    console.log(nome);

    setNome("");
}
```

Para vários campos:

```jsx
setDados({
    nome: "",
    email: "",
    senha: ""
});
```

---

# Textarea

O componente `<textarea>` funciona exatamente como um input controlado.

```jsx
import { useState } from "react";

function App(){

    const [mensagem, setMensagem] = useState("");

    return(

        <textarea
            value={mensagem}
            onChange={(e)=>setMensagem(e.target.value)}
        />

    )

}
```

---

# Select

O `<select>` também é controlado pelo estado.

```jsx
import { useState } from "react";

function App(){

    const [cargo, setCargo] = useState("");

    return(

        <select
            value={cargo}
            onChange={(e)=>setCargo(e.target.value)}
        >

            <option value="">
                Selecione
            </option>

            <option value="frontend">
                Front-end
            </option>

            <option value="backend">
                Back-end
            </option>

            <option value="fullstack">
                Full Stack
            </option>

        </select>

    )

}
```

---

# Checkbox

Checkbox representa valores booleanos (`true` ou `false`).

```jsx
import { useState } from "react";

function App(){

    const [aceito, setAceito] = useState(false);

    return(

        <label>

            <input
                type="checkbox"
                checked={aceito}
                onChange={(e)=>setAceito(e.target.checked)}
            />

            Aceito os termos

        </label>

    )

}
```

---

# Radio Button

Permite selecionar apenas uma opção.

```jsx
import { useState } from "react";

function App(){

    const [sexo, setSexo] = useState("");

    return(

        <>
            <label>

                <input
                    type="radio"
                    value="Masculino"
                    checked={sexo==="Masculino"}
                    onChange={(e)=>setSexo(e.target.value)}
                />

                Masculino

            </label>

            <label>

                <input
                    type="radio"
                    value="Feminino"
                    checked={sexo==="Feminino"}
                    onChange={(e)=>setSexo(e.target.value)}
                />

                Feminino

            </label>
        </>

    )

}
```

---

# Validação simples

Antes de enviar, pode-se verificar se os campos foram preenchidos.

```jsx
function enviar(e){

    e.preventDefault();

    if(nome === ""){
        alert("Digite seu nome.");
        return;
    }

    alert("Cadastro realizado!");
}
```

---

# Resumo

- Formulários capturam dados do usuário.
- `useState` controla os valores dos inputs.
- `value` exibe o estado atual.
- `onChange` atualiza o estado.
- `preventDefault()` impede o recarregamento da página.
- `textarea` funciona como um input.
- `select` utiliza `value` e `onChange`.
- Checkbox usa `checked`.
- Radio Button compara valores.
- Após enviar, pode-se limpar os estados.
- A maioria dos projetos React utiliza **Controlled Inputs**.