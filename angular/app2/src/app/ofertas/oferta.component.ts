import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OfertaService} from '../services/oferta.service';
import {Oferta} from '../../shared/ofertas.model';
import 'rxjs/Rx'
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private ofertasService:OfertaService) {}
  public oferta: Oferta

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
      .then(( oferta: Oferta) => {
          this.oferta = oferta
      })
    })

  }

  ngOnDestroy() {
   }
}
