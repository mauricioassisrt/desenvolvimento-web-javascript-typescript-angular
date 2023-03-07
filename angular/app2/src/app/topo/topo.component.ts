import { Oferta } from './../../shared/ofertas.model';
import { Observable } from 'rxjs/Observable';
import { OfertaService } from './../services/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertaService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject()

  constructor(
   private ofertaService: OfertaService
  ) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((termo: string) => {
      console.log("requisicao HTTP")

      if(termo.trim() === '') {
        return Observable.of<Oferta[]>([])
      }
      return this.ofertaService.pesquisaOfertas(termo)
    })
    .catch((err: any) => {
      console.error(err)
      return Observable.of<Oferta[]>([])
    })

    this.ofertas.subscribe((ofertas: Oferta[]) =>  {
      this.ofertas2 = ofertas
    })

  }

  public pesquisa(termoBusca: string): void {
    console.log('keyup caracter', termoBusca)
    this.subjectPesquisa.next(termoBusca)

  }
}
