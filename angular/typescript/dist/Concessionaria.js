"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }
    fonecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
exports.default = Concessionaria;
