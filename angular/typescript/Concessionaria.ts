import Carro from "./Carro"

export default class Concessionaria{
    private endereco: string =''
    private listaDeCarros: any
    constructor (endereco:string, listaCarros:Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaCarros
    }
    public fonecerEndereco(): string
    {
        return this.endereco
    }
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}
