class Tijolo {
    constructor(altura, base){
        this.altura = altura
        this.base = base
    }

    Area(){
        return this.altura * this.base
    }

    Soma(){
        return this.altura + this.base
    }

    Multiplica(valor){
        return (this.altura + this.base) * valor
    }
}
console.log(valor)
var tijolo1 = new Tijolo(2,2)
var tijolo2 = new Tijolo(3,2.5)

console.log(
    tijolo1.Multiplica(2)
)

console.log(
    tijolo1.Area()
    )

console.log(
    tijolo1.Soma()
)

console.log(
    tijolo2.Soma()
)







// let // local
//var // global
