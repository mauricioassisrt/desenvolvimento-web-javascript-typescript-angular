import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfertaService} from "../../services/oferta.service";

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertaService]
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = ''
  constructor(
    private router:ActivatedRoute,
    private ofertaService: OfertaService
  ) { }

  ngOnInit() {
    this.ofertaService.getOndeFicaOfertaPorId(this.router.parent.snapshot.params['id'])
      .then((descricao: string) =>{
        this.ondeFica = descricao
      })
    console.log(this.router.parent.snapshot.params['id'])
  }

}
