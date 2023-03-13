import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Progresso} from './progresso.service';

@Injectable()
export class Bd {
    constructor(private progress: Progresso) {
    }

    public publicar(publicacao: any): void {

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
            .push({titulo: publicacao.titulo})
            .then((resposta: any) => {
                let nomeImagem = resposta.key;

                firebase.storage().ref()
                    .child(`imagens/${nomeImagem}`)
                    .put(publicacao.image)
                    .on(firebase.storage.TaskEvent.STATE_CHANGED,
                        (snapshot: any) => {
                            this.progress.status = 'em andamento';
                            this.progress.estado = snapshot;
                            console.log('em andamento');
                        }, (error) => {
                            this.progress.status = 'error';
                        },
                        () => {
                            this.progress.status = 'concluido';
                        });
            });
    }

    public consultarPublicacoes(emailUsuario: string): any {
        console.log(emailUsuario)
        firebase.database().ref(`publicacoes/${btoa(emailUsuario)}`)
            .once('value')
            .then((snapshot: any) => {
                console.log(snapshot.val());
            });
    }
}
