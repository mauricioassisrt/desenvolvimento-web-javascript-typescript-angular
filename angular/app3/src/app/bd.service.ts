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

    public consultarPublicacoes(emailUsuario: string): Promise<any> {
        return new Promise((resolve, reject) => {

            firebase.database().ref(`publicacoes/${btoa(emailUsuario)}`)
                .orderByKey()
                .once('value')
                .then((snapshot: any) => {
                    let publicacoes: Array<any> = [];
                    snapshot.forEach((childSnapshot: any) => {
                        let publicacao = childSnapshot.val();
                        publicacao.key = childSnapshot.key;
                        publicacoes.push(publicacao);
                    });
                    // resolve(publicacoes)
                    return publicacoes.reverse();
                }).then((publicacoes: any) => {
                publicacoes.forEach((publicacao) => {
                    firebase.storage().ref()
                        .child(`imagens/${publicacao.key}`)
                        .getDownloadURL()
                        .then((url: string) => {
                            publicacao.url_imagem = url;
                            firebase.database().ref(`usuario_detalhe/${btoa(emailUsuario)}`)
                                .once('value')
                                .then((snapshot: any) => {
                                    publicacao.nome_usuario = snapshot.val().nome_usuario;
                                });
                        });
                });
                resolve(publicacoes)
            });
        });
    }
}
