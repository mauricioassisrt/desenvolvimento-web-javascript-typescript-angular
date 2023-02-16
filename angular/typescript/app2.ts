import  Carro  from './Carro'
import  Pessoa  from './Pessoa'
import  Concessionaria from './Concessionaria'
// let carroA = new Carro('Gol', 4, 200)
// console.log(carroA)
// carroA.acelerar()
// console.log(carroA)




let pessoa = new Pessoa('José ', 'Veloster')
console.log(pessoa.dizerCarroPreferido())

// criar carros

let carroA = new Carro("Dodge", 4, 120)

let carroB = new Carro("fusca", 2, 60)

let carroC = new Carro("Fiat", 4, 120)


let listaCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria("Av paulista", listaCarros)

console.log(concessionaria.mostrarListaDeCarros())

let pessoaA = new Pessoa("Mauricio", "fusca")
console.log(pessoaA.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro:Carro)=>{
    if (carro['modelo'] == pessoaA.dizerCarroPreferido()) {
       pessoaA.comprarCarro(carro) 
    }
})

console.log(pessoaA.dizerCarroTem())
