import { OfertaService } from './../services/oferta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertaService ]
})
export class TopoComponent implements OnInit {

  constructor(
   private ofertaService: OfertaService
  ) { }

  ngOnInit() {
  }
  public pesquisa(termoBusca: string): void {
    console.log(termoBusca)
  }
}
