/*  Passo 3

Em um arquivo diferente, crie o objeto literal 
curso que tem como atributos: nome do curso (string), 
nota de aprovação (number), faltas máximas (number) 
e uma lista de estudantes (um array composto pelos 
alunos criados no passo 1). */

/* Passo 4
Crie o método que permite adicionar alunos à lista 
do curso, ou seja, quando chamamos nosso método em 
nosso objeto curso, deverá adicionar um aluno a mais 
na propriedade lista de estudantes do objeto curso.
*/

 /* Passo 5

Crie um método para o objeto curso que receba um 
aluno (como parâmetro) e retorne true se ele 
aprovou no curso ou false em caso de reprovação. 
Para ser aprovado, o aluno tem que ter uma média 
igual ou acima da nota de aprovação  e ter menos 
faltas que faltas máximas. Se tiver a mesma 
quantidade, tem que estar 10% acima da nota de 
aprovação. 
*/

/* Passo 6

Crie um método para o objeto curso que percorra a 
lista de estudantes e retorne um array de booleanos 
com os resultados se os alunos aprovaram ou não.  
*/



function Curso(nomeCurso, notaDeAprovacaoCurso,
   faltasMaximasCurso,listaDeEstudantesCurso) {
   this.nome = nomeCurso;
   this.notaDeAprovacao = notaDeAprovacaoCurso;
   this.faltasMaximas = faltasMaximasCurso;
   this.listaDeEstudantes = listaDeEstudantesCurso;

/* 4 */  this.addEstudante = (estudanteNovo) => 
         this.listaDeEstudantes.push(estudanteNovo);

/* 5 */  this.foiAprovado = (estudanteQuestionador) => {
            if(
            (estudanteQuestionador.calcularMedia() >= this.notaDeAprovacao 
            && 
            estudanteQuestionador.faltas < this.faltasMaximas) || 
            (estudanteQuestionador.calcularMedia() >= 
            this.notaDeAprovacao*1.1 && 
            estudanteQuestionador.faltas == this.faltasMaximas))
            {
               return true
            } else{
               return false
            }
   };

/* 6 */  this.alunosAprovados = () => this.listaDeEstudantes.map((aluno) => 
           this.foiAprovado(aluno));

}

module.exports = Curso;



