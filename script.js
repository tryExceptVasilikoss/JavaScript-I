console.log("JavaScript carregado!");

const nomeAluno = "Kalline";
let idade = 17;
const matriculado = true;

console.log(nomeAluno, idade, matriculado);
console.log(typeof nomeAluno, typeof idade, typeof matriculado);

let a = 1;
let b = 10;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto:", a % b);

// O primeiro número é maior que o segundo? Não (1 > 10 é false).
// Eles são estritamente iguais? Não (1 === 10 é false).
console.log("a > b?", a > b);
console.log("a === b?", a === b);

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("Soma:", n1 + n2);
console.log(typeof n1, typeof n2);

const idadeMaioridade = Number(prompt("5.1 - Digite sua idade:"));

if (idadeMaioridade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

const nota = Number(prompt("5.2 - Digite uma nota de 0 a 100:"));

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

const numero = Number(prompt("5.3 - Digite um número inteiro:"));

if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

const idadeDepuracao = Number(prompt("Idade:"));

if (idadeDepuracao === 18) {
  console.log("Tem exatamente 18 anos");
} else {
  console.log("Idade diferente de 18");
}

console.log(idadeDepuracao);

const nome = prompt("Nome do aluno:");
const nota1 = Number(prompt("Primeira nota:"));
const nota2 = Number(prompt("Segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;
if (media >= 70) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);