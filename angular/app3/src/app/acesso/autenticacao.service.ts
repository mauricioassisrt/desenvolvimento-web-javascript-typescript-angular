import {Usuario} from './usuario.model';
import * as firebase from 'firebase';

export class AutenticacaoService {
    public cadastrarUsuario(usuario: Usuario): void {
        console.log(usuario);
        firebase.auth().createUserWithEmailAndPassword(
            usuario.email, usuario.senha
        ).then((resposta: any) => {
            console.log(resposta)
        }).catch((error: Error) => {
            console.log(error)
        })
    }
}
