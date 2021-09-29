/* Passo 2

Nosso objeto aluno terá o método calcularMedia que retorna a média 
de suas notas. Também terá um método chamado faltas, que 
simplesmente aumenta o número de faltas em 1. */

function Aluno (nomeAluno, faltasAluno, notasAluno) {
  this.nome = nomeAluno;
  this.faltas = faltasAluno;
  this.notas = notasAluno;
  this.calcularMedia = () =>
    this.notas.reduce((acumulador, elemento) => 
    acumulador + elemento) / this.notas.length;
    
    this.adicionaFaltas = () => this.faltas++;
} 

module.exports = Aluno;



