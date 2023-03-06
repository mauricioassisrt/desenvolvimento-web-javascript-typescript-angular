import { Oferta } from './../../shared/ofertas.model';
import { Observable } from 'rxjs/Observable';
import { OfertaService } from './../services/oferta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertaService ]
})
export class TopoComponent implements OnInit {
  public ofertas: Observable<Oferta[]>
  constructor(
   private ofertaService: OfertaService
  ) { }

  ngOnInit() {
  }
  public pesquisa(termoBusca: string): void {
    this.ofertas = this.ofertaService.pesquisaOfertas(termoBusca)
    this.ofertas.subscribe((ofertas: Oferta[])=> console.log(ofertas),
    (erro: any) => console.log("Erro stats:", erro.status))
  }
}
