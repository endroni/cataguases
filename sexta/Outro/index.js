const Cliente = require("./Cliente");
const Endereco = require("./Endereco");

const enderecoRubem = new Endereco("Marieta", 125, "Belo Horizonte", "Dom Joaquim", "MG");
const clienteRubem = new Cliente("Rubem", 31, enderecoRubem, "contato@rubemtools.com.br");
console.log(clienteRubem.nome + " mora em " + clienteRubem.endereco);

const clienteIone = new Cliente("Ione", 37);
clienteIone.endereco = new Endereco("Coronel Prais", 55, "Sagrada Família", "Belo Horizonte", "MG");
console.log(clienteIone.nome + " mora em " + clienteIone.endereco);

const cliente1 = new Cliente("Rubem", 38, "rubao@gmail.com");
const cliente2 = new Cliente("Samuel", 13);

console.log(cliente1);

console.log(cliente2.nome + " é adulto? " + cliente2.isAdult());