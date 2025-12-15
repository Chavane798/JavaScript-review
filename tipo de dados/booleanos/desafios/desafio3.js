/* Implemente um sistema de notas onde:
Notas >= 90: "Aprovado com A"
Notas >= 70 e < 90: "Aprovado com B"
Notas < 70: "Reprovado". 
*/

let nota = 10;

if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado com B");
} else {
  console.log("Reprovado");
}
