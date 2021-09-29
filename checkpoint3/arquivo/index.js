var aluno = require("./../Aluno");
var curso = require("./../Curso"); 
var index = require("./../index");



var curso1 = new curso ("Programação Imperativa", 7, 1, 
index);


console.log(curso1.alunosAprovados()); 