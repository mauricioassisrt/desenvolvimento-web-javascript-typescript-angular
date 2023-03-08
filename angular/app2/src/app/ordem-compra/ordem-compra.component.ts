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

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }
  public atualizaEndereco(endereco: string) {
    this.endereco = endereco
    console.log(this.endereco)
  }

  public atualizaNumero(numero: string) {
    this.numero = numero

    console.log(this.numero)
  }

  public atualizaComplemento(complemento: string) {
    this.complemento = complemento

    console.log(this.complemento)
  }

  public atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento

    console.log(this.formaPagamento)
  }
}
