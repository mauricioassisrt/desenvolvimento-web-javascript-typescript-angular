import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Bd} from '../../../bd.service';
import * as firebase from 'firebase';
import {Progresso} from '../../../progresso.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'app-incluir-publicacao',
    templateUrl: './incluir-publicacao.component.html',
    styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicaoComponent implements OnInit {

    @Output() atualizarTimeLine: EventEmitter<any> = new EventEmitter<any>()
    public email: string;
    private imagem: any;
    public progressoPublicacao: string = 'pendente';
    public porcentagem: number;

    public formulario: FormGroup = new FormGroup({
        'titulo': new FormControl(null)
    });

    constructor(private bd: Bd, private progresso: Progresso) {
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            this.email = user.email;
        });
    }

    public publicar(): void {
        this.bd.publicar({
            email: this.email,
            titulo: this.formulario.value.titulo,
            image: this.imagem[0]
        });

        let acompanhamentoUpload = Observable.interval(1000);

        let continua = new Subject();

        continua.next(true);

        acompanhamentoUpload
            .takeUntil(continua)
            .subscribe(() => {
                console.log(this.progresso.status)
                console.log(this.progresso.estado)
                this.progressoPublicacao = 'andamento';
                this.porcentagem = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100);
                console.log( this.porcentagem )
                if (this.progresso.status === 'concluido') {
                    this.progressoPublicacao = 'concluido';
                    /*
                        do componnente filho após incluir
                        ele chama dentro do template home(pai)
                        o evento para um determinado metodo
                        essa é a forma de passar via output
                     */
                    this.atualizarTimeLine.emit()
                    continua.next(false);
                }

            });
    }

    public preparaImagemUpload(event: Event): void {
        this.imagem = (<HTMLInputElement>event.target).files;
    }
}
