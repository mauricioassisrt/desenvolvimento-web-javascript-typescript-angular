import { Component, OnInit } from '@angular/core';
import {OfertaService} from "../services/oferta.service";
import {Oferta} from "../../shared/ofertas.model";
import {of} from "rxjs/observable/of";

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
    // this.ofertas = this.ofertaService.getOfertas()
    // console.log(this.ofertas)
    this.ofertaService.getOfertas2()
      .then((ofertas: Oferta[] ) => {
        this.ofertas = ofertas})
      .catch((param: any)=> {
        console.log(param)
      })
  }

}
