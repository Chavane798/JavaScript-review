//Situacao estudantil

let testeA = 10
let testB = 20
let trabalho = 100

let media = (testeA + testB + trabalho) / 3;

if(media > 20){
    console.error("Verifique se as notas estao correctas");
}

if(media >= 14){
    console.log("Estudante dispensado com media " + media);
}else if(media >= 10){
    console.log("Estudante aprovado aos exames com media " + media);
}else{
    console.log("estudante excluido com a media " + media);
}
