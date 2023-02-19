import { IDao } from "./IDao";
import Concessionaria from "./Concessionaria";
export default class ConcessionariaDAO implements IDao {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
      console.log( 'logica de insert')
       return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('Atualizar')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('remover')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('Select')
        return new Concessionaria('', [])
    }

    selecionarTodos(): [any] {
        console.log('Todos')
        return [new Concessionaria('', [])]
    }
    
}