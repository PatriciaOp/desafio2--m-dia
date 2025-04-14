


 
// Importa a biblioteca 
const readlineSync = require('readline-sync');

//Recebe os dados do usuario via etrminal 
const nome = readlineSync.question('Digite o nome do aluno: ');

const idade = readlineSync.questionInt('Digite a idade do aluno: ');

const nota1 = readlineSync.questionFloat('Digite a primeira nota: ');

const nota2 = readlineSync.questionFloat('Digite a segunda nota: ');

const nota3 = readlineSync.questionFloat('Digite a terceira nota: ');

let mediaAluno;
let mediaFormatada;

 //Calculo da média
function media(nota1,nota2,nota3){

    mediaAluno = (nota1 + nota2 + nota3)/3;

    //resultado da média com 2 casas decimais
    mediaFormatada = mediaAluno.toFixed(2);

}
// Mostra o resultado aprovado caso a nota seja igual ou maior que 7 e reporvado caso seja menor que 7
function resultado() {   

    if (mediaAluno >= 7){
        console.log(` 
            Nome: ${nome} 
            Idade: ${idade} 
            Notas: ${nota1}, ${nota2}, ${nota3}
            Média: ${mediaFormatada} 
            Situação: Parabéns,você foi aprovado!
            `);
        
    } 
    else  {       
        console.log(` 
        Nome: ${nome} 
        Idade: ${idade} 
        Notas: ${nota1}, ${nota2}, ${nota3}
        Média: ${mediaFormatada} 
        Situação: Infelizmente você foi reprovado.
        `);
    }
        
}
//Chama as funções
media(nota1,nota2,nota3);
resultado();



