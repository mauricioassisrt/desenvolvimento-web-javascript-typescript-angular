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
  public enderecoValido: boolean
  public complementoValido: boolean
  public numeroValido: boolean
  public formaPagamentoValido: boolean

  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true


  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }
  public atualizaEndereco(endereco: string) {
    this.endereco = endereco
    this.enderecoEstadoPrimitivo = false
    if(this.endereco.length > 3) {
      this.enderecoValido = true
    }else {
      this.enderecoValido = false
    }
    console.log(this.endereco)
  }

  public atualizaNumero(numero: string) {
    this.numero = numero
    this.numeroEstadoPrimitivo = false
    if(this.numero.length > 0){
      this.numeroValido = true
    }else{
      this.numeroValido = false
    }
    console.log(this.numero)
  }

  public atualizaComplemento(complemento: string) {
    this.complemento = complemento
    this.complementoEstadoPrimitivo = false
    if(this.complemento.length > 0){
      this.complementoValido = true
    }
    console.log(this.complemento)
  }

  public atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    if(this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true
    }else {
      this.formaPagamentoValido = false
    }
    console.log(this.formaPagamento)
  }
}
