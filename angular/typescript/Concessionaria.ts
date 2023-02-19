import Carro from "./Carro"
import { IConcessionaria } from "./IConcessionaria"

export default class Concessionaria implements IConcessionaria{
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
    public fornecerHorarioFuncionamento(): string {
        return 'Seg a sex das 8h as 18 e sab das 8 as 13'
    }
}
