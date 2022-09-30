// Classe do Aluno
module.exports = class Aluno{
    // Caracteristica = Propriedades do Aluno
    constructor(matricula, nome, idade, nota ){
        this.matricula = matricula
        this.nome = nome
        this.idade = idade
        this.nota = nota
    }

    maior(){
        return this.idade >= 18
    }

    aprovado(){
        return this.nota >= 6
    }
}
