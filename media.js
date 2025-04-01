


 
let nome = "Maria";
let idade = 15;
let nota1 = 8.5;
let nota2 = 7.5;
let nota3 = 9 ;


function media () {
    let mediaAluno = (nota1 + nota2 + nota3)/3;

    let alunoMedia = mediaAluno.toFixed(2);

    if (mediaAluno >= 7){
        console.log(` 
            Nome: ${nome} 
            Idade: ${idade} 
            Notas: ${nota1}, ${nota2}, ${nota3}
            Média: ${alunoMedia} 
            Situação: Parabéns, você foi aprovado!
            `)
        
    } 
    else  {       
        console.log(` 
        Nome: ${nome} 
        Idade: ${idade} 
        Notas: ${nota1}, ${nota2}, ${nota3}
        Média: ${alunoMedia} 
        Situação: Infelizmente você foi reprovado.
        `)
    }
        
}
media();



