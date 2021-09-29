/* Passo 1

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */
/* 
let aluno = {
    nome:"",
    faltas: 0,
    notas: [],
}

function Aluno(nomeAluno, faltasAluno, notasAluno) {
    this.nome = nomeAluno,
    this.faltas = faltasAluno,
    this.notas = notasAluno;

    calcularMedia = () => this.notas.reduce((acumulador, elemento) => acumulador + elemento)/ this.notas.length;

    adicionaFaltas = () => this.faltas --;

} */

/* module.exports = Aluno; */

/* Passo 2

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */

/*  Passo 3

Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

/* Passo 4

	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

    /* Passo 5

	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */
/* Passo 6

	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.  */
/* Passo 7

	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente). */

var aluno = require("./../Aluno");

var aluno1 = new aluno("Willian", 0, [7.6, 8, 7.6]);
var aluno2 = new aluno("Joel", 0, [9.5,10,10]);
var aluno3 = new aluno("Wagner", 0, [10,9.5,10]);
var aluno4 = new aluno("Peterson", 0, [7.6, 8, 9.5]);
var aluno5 = new aluno("Alex", 0, [6, 8, 9.5]);
var aluno6 = new aluno("Julio", 0, [8, 8, 8]);

var index = [
    aluno1,
    aluno2,
    aluno3,
    aluno4,
    aluno5,
    aluno6,
 ]

 module.exports = index;