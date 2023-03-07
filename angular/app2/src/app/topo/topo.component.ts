import {Oferta} from './../../shared/ofertas.model';
import {Observable} from 'rxjs/Observable';
import {OfertaService} from './../services/oferta.service';
import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertaService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject()

  constructor(
   private ofertaService: OfertaService
  ) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa
      .debounceTime(1000)
      .distinctUntilChanged()
      .switchMap((termo: string) => {

        if (termo.trim() === '') {
          return Observable.of<Oferta[]>([])
        }

        return this.ofertaService.pesquisaOfertas(termo)
      })
    .catch((err: any) => {
      return Observable.of<Oferta[]>([])
    })

  }

  public pesquisa(termoBusca: string): void {
    this.subjectPesquisa.next(termoBusca)
  }
}
