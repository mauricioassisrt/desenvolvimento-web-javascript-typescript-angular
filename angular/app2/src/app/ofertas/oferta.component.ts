import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertaService} from '../services/oferta.service';
import {Oferta} from '../../shared/ofertas.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Observer } from 'rxjs/Observer';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertaService]
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private ofertasService:OfertaService) {}
  public oferta: Oferta
  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta) => {
          this.oferta = oferta
    })
    /* this.route.params.subscribe(
      (parametro: any) => { console.log(parametro)},
      (error: any) => console.log(error),
      () =>  console.log("processo concluido")) */
      // let tempo = Observable.interval(2500)

      // tempo.subscribe((intervalo: number) => {
      //   console.log(intervalo)
      // })
      //observavel
      let meuObservable = Observable.create((observer: Observer<string>)=>{
        observer.next('Primeiro evento da stream')
        observer.complete()
        observer.error("error ")
      })

      /// observador
      meuObservable.subscribe(
        (resultado: any) => console.log(resultado + 10),
        (erro: string) => console.log(erro),
        ()=> console.log("Finalizado")
      )
  }

}
