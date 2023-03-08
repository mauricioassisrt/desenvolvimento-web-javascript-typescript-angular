import { Component, OnInit, OnDestroy } from '@angular/core';
import {OfertaService} from '../services/oferta.service';
import 'rxjs/Rx'
import { OrdemCompraService } from 'app/services/ordem-compra.service';
import { Pedido } from 'shared/pedido.model';
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
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
  public formEstado: string = 'disabled'
  public pedido: Pedido = new Pedido('', '', '', '')
  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {
    //console.log(this.ordemCompraService.efetivarCompra())
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
    this.habilitaForm()
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
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string) {
    this.complemento = complemento
    this.complementoEstadoPrimitivo = false
    if(this.complemento.length > 0){
      this.complementoValido = true
    }
    console.log(this.complemento)
    this.habilitaForm()
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
    this.habilitaForm()
  }

  public habilitaForm(): void {
    if(this.enderecoValido === true &&
       this.numeroValido === true &&
       this.formaPagamentoValido === true)
      {
        this.formEstado = ''
      } else {
        this.formEstado = 'disabled'
      }

  }

  public confirmarCompra(): void {
    this.pedido.complemento = this.complemento
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero
    this.pedido.formaPagamento = this.formaPagamento
    this.ordemCompraService.efetivarCompra(this.pedido)
  }
}
