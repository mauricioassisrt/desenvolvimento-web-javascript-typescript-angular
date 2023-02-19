import Concessionaria from "./Concessionaria";
import  ConcessionariaDAO  from "./ConcessionariaDAO";
import { Dao } from "./DAO";
import Pessoa from "./Pessoa";
import PessoaDAO from "./PessoaDAO";

// let dao:ConcessionariaDAO = new ConcessionariaDAO()
// let dao2:PessoaDAO = new PessoaDAO()
let concessionaria = new Concessionaria('', [])
let pessoa = new Pessoa('','')

let dao3: Dao<Pessoa> = new Dao<Pessoa>()
let dao5: Dao<Concessionaria> = new Dao<Concessionaria>()

dao3.inserir(pessoa)
dao5.inserir(concessionaria)

