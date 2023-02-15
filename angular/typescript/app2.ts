class Carro {
    private modelo?: string
    private numeroPortas?: number
    private velocidade: number = 0

    constructor(modelo:string, numeroPortas:number, velocidade:number){
        this.modelo = modelo
        this.velocidade = velocidade
        this.numeroPortas = numeroPortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco?: string
    private listaCarros: any

    public fornecerEndereco(): string { 
        return this.endereco?
    }
    public mostrarListaCarros(): any { 
        return
    }
}