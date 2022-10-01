module.exports = class Endereco {
    constructor(rua, numero, bairro, cidade, uf) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }
 
    toString(){
        return this.rua + " " + this.numero + ", B. " + this.bairro + ", " + this.cidade + "/" + this.uf;
    }
}