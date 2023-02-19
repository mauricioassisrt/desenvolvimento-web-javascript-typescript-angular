import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from "./Concessionaria";

let carro = new Carro('Fiat uno', 4)
let moto = new Moto()
let concessionaria = new Concessionaria('', [])
moto.acelerar()
moto.acelerar()
carro.acelerar()

console.log(moto)
console.log(carro)
console.log(concessionaria.fornecerHorarioFuncionamento())