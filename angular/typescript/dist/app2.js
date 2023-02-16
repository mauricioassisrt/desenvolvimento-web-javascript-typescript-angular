"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
// let carroA = new Carro('Gol', 4, 200)
// console.log(carroA)
// carroA.acelerar()
// console.log(carroA)
let pessoa = new Pessoa_1.default('Jos� ', 'Veloster');
console.log(pessoa.dizerCarroPreferido());
// criar carros
let carroA = new Carro_1.default("Dodge", 4, 120);
let carroB = new Carro_1.default("fusca", 2, 60);
let carroC = new Carro_1.default("Fiat", 4, 120);
let listaCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default("Av paulista", listaCarros);
console.log(concessionaria.mostrarListaDeCarros());
let pessoaA = new Pessoa_1.default("Mauricio", "fusca");
console.log(pessoaA.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == pessoaA.dizerCarroPreferido()) {
        pessoaA.comprarCarro(carro);
    }
});
console.log(pessoaA.dizerCarroTem());
