"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, carro) {
        this.nome = nome;
        this.carroPreferido = carro;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        return this.carro = carro;
    }
    dizerCarroTem() {
        return this.carro;
    }
}
exports.default = Pessoa;
