import {animate, Component, OnInit, state, style, transition, trigger} from '@angular/core';
import {Imagem} from './imagem.model';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css'],
    animations: [
        trigger('banner', [
            state('escondido', style({
                opacity: 0
            })),
            state('visivel', style({
                opacity: 1
            })),
            transition('escondido <=> visivel', animate('1s ease-in',))
        ])
    ]
})
export class BannerComponent implements OnInit {
    public estado: string = 'visivel';
    public imagens: Imagem[] = [
        {estado: 'visivel', url: '/assets/imagens/img_1.png'},
        {estado: 'escondido', url: '/assets/imagens/img_2.png'},
        {estado: 'escondido', url: '/assets/imagens/img_3.png'},
        {estado: 'escondido', url: '/assets/imagens/img_4.png'},
        {estado: 'escondido', url: '/assets/imagens/img_5.png'},
    ]
    constructor() {
    }

    ngOnInit() {
     setTimeout(() =>this.logicaRotacao(), 2000)
    }

    public logicaRotacao(): void {
        let idX: number

        for (let i: number =0; i<=4; i++) {
            if(this.imagens[i].estado === 'visivel') {
                this.imagens[i].estado = 'escondido'
                idX = i === 4 ? 0 : i + 1
                break
            }
        }

        this.imagens[idX].estado = 'visivel'

        setTimeout(() =>this.logicaRotacao(), 2000)
    }

}
