module.exports = class Curso{
    constructor(id, nome, nota){
        this.id = id
        this.nome = nome
        this.nota = nota
        this.resultado = "Aaaa"
    }

    static status(){
        if (this.nota >= 6){
            this.resultado = "aprovado"
        } else {
            this.resultado = "reprovado"
        } 
        return this.resultado       
    }

    toString(){        
        return "O aluno " + this.nome + ", esta " + this.status()
    }
}

/* Testando - Para testar é necessário remover o module.require
const curso1 = new Curso(101, "BackEnd", 4)
console.log(curso1.toString())
*/