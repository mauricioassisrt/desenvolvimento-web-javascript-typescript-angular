import { Component, OnInit } from '@angular/core';
import {OfertaService} from "../services/oferta.service";
import {Oferta} from "../../shared/ofertas.model";

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertaService ]
})
export class RestaurantesComponent implements OnInit {
  public ofertas: Oferta[]
  public dataTeste: any = new Date(2017, 8,  30)

  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })

  }

}
