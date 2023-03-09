
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OfertaService} from '../services/oferta.service';
import {Oferta} from '../../shared/ofertas.model';
import 'rxjs/Rx'
import CarrinhoService from 'app/services/carrinho.service';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService, CarrinhoService]
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService:OfertaService,
    private carrinhoService: CarrinhoService
  ) {}


  ngOnInit() {
    console.log(this.carrinhoService.exibirItens())
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
      .then(( oferta: Oferta) => {
          this.oferta = oferta
      })
    })

  }

  ngOnDestroy() {
  }

  public adicionarItemCarrinho():void {
   this.carrinhoService.incluirItem(this.oferta)
  }
}
