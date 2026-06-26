// ========================================
// JAVASCRIPT
// ========================================

// ========================================
// OPERADORES
// ========================================

// --------------------
// Numbers
// --------------------

console.log(2);
console.log(2.45);
console.log(-2);

// --------------------
// Operações Aritméticas
// --------------------

console.log(5 + 4);
console.log(6 - 3);
console.log(7 * 2);
console.log(8 / 1);
console.log(5 + 2 * (4 - 1));

// --------------------
// Special Numbers
// --------------------

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

// --------------------
// Strings
// --------------------

console.log("Texto 01");
console.log('Texto 02');
console.log(`Texto 03`);

// --------------------
// Caracteres Especiais
// --------------------

console.log("Texto com\nquebra de linha");
console.log("Texto com\tespaço");

/*
\n = quebra de linha
\t = tabulação
*/

// --------------------
// Concatenação
// --------------------

console.log("um " + "texto " + "somado");

// --------------------
// Interpolação
// --------------------

const texto = "JavaScript";

console.log(`Estudando ${texto}`);

// --------------------
// Booleanos
// --------------------

console.log(true);
console.log(false);

// --------------------
// Comparações
// --------------------

console.log(1 > 2);
console.log(1 < 2);

console.log(3 <= 4);
console.log(4 >= 3);

console.log(5 == 6);
console.log(7 != 8);

// --------------------
// Valor Idêntico
// --------------------

console.log(5 === 5);
console.log(5 !== 6);

// == compara apenas o valor
// === compara valor e tipo

// --------------------
// Operadores Lógicos
// --------------------

// AND - os dois valores precisam ser verdadeiros
console.log(true && true);

// OR - apenas um valor precisa ser verdadeiro
console.log(true || false);

// NOT - inverte o valor
console.log(!true);

// --------------------
// Tabela Verdade
// --------------------

console.log(true && true);   // true
console.log(true && false);  // false

console.log(true || false);  // true
console.log(false || false); // false

console.log(!true);          // false
console.log(!false);         // true

// ========================================
// VARIÁVEIS
// ========================================

// --------------------
// Criando variáveis
// --------------------

let nome = "Orlando";

console.log(nome);

// let permite alterar o valor

nome = "Meu nome é Orlando";

console.log(nome);

// const não permite alteração

const idade = 18;

console.log(idade);


// idade = 20; // Erro

// --------------------
// Variáveis em sequência
// --------------------

let a = 1,
    b = 2,
    c = 3;

console.log(a);
console.log(b);
console.log(c);

// --------------------
// Regras de nomes
// --------------------

// Não pode iniciar com números
// Não pode usar @
// Pode usar _ e $

// Exemplos:

let _usuario = "Orlando";
let $valor = 100;

console.log(_usuario);
console.log($valor);

// --------------------
// Case Sensitive
// --------------------

// Letras maiúsculas e minúsculas são diferentes

const altura = 1.85;
const Altura = 2.00;

console.log(altura);
console.log(Altura);

// ========================================
// FUNÇÕES NATIVAS
// ========================================

// Usado para receber dados do usuário

// const idadeUsuario = prompt("Digite sua idade:");
// console.log(`Você tem ${idadeUsuario} anos.`);

// --------------------
// Alert
// --------------------

// alert("Login inválido");

// --------------------
// Objeto Math
// --------------------

// max = maior número
// floor = arredonda para baixo
// ceil = arredonda para cima

console.log(Math.max(5, 9, 1, 4));

console.log(Math.floor(3.14));

console.log(Math.ceil(3.14));

// --------------------
// Objeto Console
// --------------------

console.log("Mensagem normal");

console.error("Mensagem de erro");

console.warn("Mensagem de aviso");

// ========================================
// ESTRUTURAS DE CONTROLE
// ========================================

// --------------------
// IF
// --------------------

// Executa um bloco se a condição for verdadeira

const numero = 10;

if(numero > 5) {
    console.log("Número maior que 5");
}

const usuario = "João";

if(usuario === "João") {
    console.log("Bem-vindo João");
}

// --------------------
// ELSE
// --------------------

// Executa quando o IF for falso

const logado = false;

if(logado) {

    console.log("Usuário logado");

} else {

    console.log("Usuário não está logado");

}

// --------------------
// ELSE IF
// --------------------

// Cria novas condições

const nota = 8;

if(nota >= 9) {

    console.log("Excelente");

} else if(nota >= 7) {

    console.log("Aprovado");

} else if(nota >= 5) {

    console.log("Recuperação");

} else {

    console.log("Reprovado");

}

// ========================================
// ESTRUTURAS DE REPETIÇÃO
// ========================================

// --------------------
// WHILE
// --------------------

let contador = 0;


while(contador < 5) {

    console.log(contador);

    contador++;

}

// --------------------
// DO WHILE
// --------------------

let numeroDo = 0;

do {

    console.log(numeroDo);

    numeroDo++;

} while(numeroDo < 3);

// --------------------
// FOR
// --------------------

for(let i = 0; i < 5; i++) {

    console.log(i);

}

// --------------------
// Break
// --------------------

// Força a saída do loop

for(let i = 0; i < 10; i++) {

    if(i === 5) {
        break;
    }

    console.log(i);

}

// --------------------
// Continue
// --------------------

// Pula uma execução do loop

for(let i = 0; i < 5; i++) {

    if(i === 2) {
        continue;
    }

    console.log(i);

}

// --------------------
// Switch
// --------------------

const opcao = 2;

switch(opcao) {

    case 1:
        console.log("Opção 1");
        break;

    case 2:
        console.log("Opção 2");
        break;

    case 3:
        console.log("Opção 3");
        break;

    default:
        console.log("Opção inválida");

}

// ========================================
// CONVENÇÃO DE NOMES
// ========================================

// camelCase é o padrão mais usado

let nomeUsuario = "Orlando";

let idadeUsuario = 18;

// Nomes devem ser claros

let quantidadeProdutos = 10;

// Evite:

let x = 10;
let a1 = "teste";

// Prefira:

let quantidadeUsuarios = 10;
let usuarioPrincipal = "Orlando";

