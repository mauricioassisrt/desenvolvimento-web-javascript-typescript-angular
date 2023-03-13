import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Progresso} from './progresso.service';

@Injectable()
export class Bd {
    constructor(private progress: Progresso) {
    }

    public publicar(publicacao: any): void {
        let nomeImagem = Date.now();
        firebase.storage().ref().child(`imagens/${nomeImagem}`)
            .put(publicacao.image)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    this.progress.status = 'em andamento';
                    this.progress.estado = snapshot;
                    console.log('em andamento')
                }, (error) => {
                    this.progress.status = 'error';
                },
                () => {
                    this.progress.status = 'concluido';
                });
        // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}}`)
        //     .push({titulo: publicacao.titulo})
    }
}
