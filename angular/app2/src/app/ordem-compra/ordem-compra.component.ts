import { Component, OnInit, OnDestroy } from '@angular/core';
import {OfertaService} from '../services/oferta.service';
import 'rxjs/Rx'
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OfertaService]
})
export class OrdemCompraComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }
}
