"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(modelo, numeroPortas, velocidade) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.velocidade = velocidade;
        this.numeroPortas = numeroPortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Carro;
