// 1. Se `hora` for menor que 12, imprime "Bom dia!".
// 2. Caso contrário, se `hora` for menor que 18, imprime "Boa tarde!".
// 3. Se nenhuma das condições acima for verdadeira, imprime "Boa noite!".

let hora = 18;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
