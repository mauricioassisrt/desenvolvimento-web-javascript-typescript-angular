import { Component, OnInit } from '@angular/core';
import {OfertaService} from "../services/oferta.service";
import {Oferta} from "../../shared/ofertas.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[]
  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertas = this.ofertaService.getOfertas()
    console.log(this.ofertas)
  }

}
