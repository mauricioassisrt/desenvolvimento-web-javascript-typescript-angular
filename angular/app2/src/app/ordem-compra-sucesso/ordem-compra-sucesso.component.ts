import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {OfertaService} from '../services/oferta.service';
import 'rxjs/Rx'
import { OrdemCompraService } from 'app/services/ordem-compra.service';
import { Pedido } from 'shared/pedido.model';
@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraSucessoComponent implements OnInit, OnDestroy {

  @Input() public idPedidoCompra: number

  constructor() {}

  ngOnInit() {
    //console.log(this.ordemCompraService.efetivarCompra())
  }

  ngOnDestroy() {
  }

}
