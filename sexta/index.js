// Requerendo, chamando a classe Aluno
const Aluno = require("./Aluno")

// Criar um objeto, instanciar a classe
const aluno1 = new Aluno(001, "Rubem", 15, 6)

const aluno2 = new Aluno(002, "Pedro", 16)

// Exibir os dados
console.log(
    aluno1.aprovado()
)

