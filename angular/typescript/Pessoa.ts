import Carro from "./Carro"
export default class Pessoa {
    private nome?: string
    private carroPreferido?: string
    private carro: Carro
    constructor(nome: string, carro: string ){
        this.nome = nome 
        this.carroPreferido = carro
    }
    public dizerNome(): string {
        return this.nome!!
    }

    public dizerCarroPreferido(): string {
       return this.carroPreferido!!
    }

    public comprarCarro(carro:Carro): void {
        return this.carro = carro
    }
    public dizerCarroTem(): Carro{
        return this.carro!!
    }

}
