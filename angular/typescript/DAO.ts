import { IDao } from "./IDao";

export class Dao<T> implements IDao<T>{
    nomeTabela: string = ''

    inserir(object: T): boolean {
      console.log( 'logica de insert')
       return true
    }

    atualizar(object: T): boolean {
        console.log('Atualizar')
        return true
    }

    remover(id: number): T {
        console.log('remover')
        return Object()
    }

    selecionar(id: number): T {
        console.log('Select')
        return  Object()
    }

    selecionarTodos(): [T] {
        console.log('Todos')
        return [ Object()]
    }
    
}