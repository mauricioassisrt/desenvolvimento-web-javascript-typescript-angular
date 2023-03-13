import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Bd} from '../../../bd.service';
import * as firebase from 'firebase';

@Component({
    selector: 'app-incluir-publicacao',
    templateUrl: './incluir-publicacao.component.html',
    styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicaoComponent implements OnInit {
    public email: string
    public formulario: FormGroup = new FormGroup({
        'titulo': new FormControl(null)
    })
    constructor(private bd: Bd) { }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user)=>{
            this.email = user.email
        })
    }

    public publicar(): void {
       this.bd.publicar({
           email: this.email,
           titulo: this.formulario.value.titulo,
       })
    }
}
