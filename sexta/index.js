// Requerendo, chamando a classe Aluno
const Aluno = require("./Aluno")

// Requerendo, chamando a classe Curso
const Curso = require("./Curso")

// Criar um objeto, instanciar a classe
const cursoTiago = new Curso(101, "BackEnd", 7)
const alunoTiago = new Aluno(001, "Tiago", 15, cursoTiago )


// Exibir os dados
console.log(
    alunoTiago
)

