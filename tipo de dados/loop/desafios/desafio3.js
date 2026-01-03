// Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let numeros = [1, 5, 11, 8, 10];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    console.log("O primeiro numero maior que 10 e: " + numeros[i]);
    break;
  }
}
