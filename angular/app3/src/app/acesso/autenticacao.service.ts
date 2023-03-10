import {Usuario} from './usuario.model';
import * as firebase from 'firebase';

export class AutenticacaoService {
    public cadastrarUsuario(usuario: Usuario): void {

        firebase.auth().createUserWithEmailAndPassword(
            usuario.email, usuario.senha
        ).then((resposta: any) => {
            delete usuario.senha
            firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                .set(usuario)
        }).catch((error: Error) => {
            console.log(error)
        });
    }
}
