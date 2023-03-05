import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfertaService} from "../../services/oferta.service";

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertaService]
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = ''
  constructor(
    private router: ActivatedRoute,
    private ofertaService: OfertaService
  ) { }

  ngOnInit() {
    this.ofertaService.getComoUsarOfertaPorId(this.router.parent.snapshot.params['id'])
      .then((descricao: string) =>{
          this.comoUsar = descricao
      })

  }

}
