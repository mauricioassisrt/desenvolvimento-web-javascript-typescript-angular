import { Component, OnInit } from '@angular/core';
import {Oferta} from "../../shared/ofertas.model";
import {OfertaService} from "../services/oferta.service";

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertaService ]
})
export class  DiversaoComponent implements OnInit {
  public ofertas: Oferta[]
  constructor(private ofertaService: OfertaService) { }
  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }

}
