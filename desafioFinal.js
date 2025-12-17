let user = {
  nomeCopleto: "Gervasio Bernardo Chavane",
  idade: 26,
  saldo: 2000,
  estadoLogado: true,
  urlperfil: "https://portifolio-2-9owr.vercel.com",
};

console.log("Bem vindo " + user.nomeCopleto.slice(0, 8).toUpperCase());

if (user.estadoLogado !== true) {
  console.log("Faca login");
}

if (user.idade >= 18) {
  console.log("Acesso total!");
} else if (user.idade >= 16 && user.idade < 18) {
  console.log("Acesso limitado");
} else {
  console.log("Acesso negado por idade!");
}

if (user.urlperfil.startsWith("https://") || user.urlperfil.endsWith(".com")) {
  console.log("Url vaslida!");
} else {
  console.log("Url invalida!");
}

let versaldo = user.saldo;
let depositar = user.saldo + 100;
let Sacar = user.saldo - 100;

switch (depositar) {
  case versaldo:
    console.log(user.saldo);
    break;

  case depositar:
    console.log("adicionar um valor fixo ao saldo " + depositar);
    break;

  case Sacar:
    console.log("subtrair um valor fixo do saldo " + Sacar);
    break;
}

depositar > 0 ? console.log("Saldo positivo") : console.log("Saldo negativo");

let historico = ["Login realizado", "Consulta de saldo", "Deposito efectuado"];

console.log(historico[0]);
console.log(historico[1]);
console.log(historico[2]);

let nome = user.nomeCopleto;
let idade = user.idade;
let saldoFinal = user.saldo;
let statutos = user.estadoLogado;

console.log(nome);
console.log(idade);
console.log(saldoFinal);
console.log(statutos);
