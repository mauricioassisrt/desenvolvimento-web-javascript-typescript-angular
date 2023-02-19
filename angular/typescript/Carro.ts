import Veiculo from "./Veiculo"

export default class Carro extends Veiculo {

    private numeroPortas?: number

    constructor(modelo:string, numeroPortas:number ) {
        super()
        this.numeroPortas = numeroPortas
        this.modelo = modelo
    }


}