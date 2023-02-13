"use strict";
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
let carroA = new Carro('Gol', 4, 200);
console.log(carroA);
carroA.acelerar();
console.log(carroA);
