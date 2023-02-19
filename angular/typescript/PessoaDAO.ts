import { IDao } from "./IDao";
import Pessoa from "./Pessoa";
export default class PessoaDAO implements IDao {
    
    nomeTabela: string = 'tb_Pessoa'

    inserir(object: Pessoa): boolean {
      console.log( 'logica de insert')
       return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('Atualizar')
        return true
    }

    remover(id: number): Pessoa {
        console.log('remover')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('Select')
        return new Pessoa('', '')
    }

    selecionarTodos(): [any] {
        console.log('Todos')
        return [new Pessoa('', '')]
    }
    
}