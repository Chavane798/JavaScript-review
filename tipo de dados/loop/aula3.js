let numeros = [ 3, 8, 12, 5, 10];
let busca = 12;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === busca){
        console.log("O numero " + busca + " esta na posicao " + i);
        break;
    }
}