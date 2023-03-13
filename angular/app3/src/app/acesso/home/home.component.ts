import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {AutenticacaoService} from '../autenticacao.service';
import {PublicacoesComponent} from './publicacoes/publicacoes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any
  constructor(private autenticacao: AutenticacaoService) { }

  ngOnInit() {
  }

  public sair(): void {
    this.autenticacao.sair()
  }

  /**
   * Esse metodo � invocado atr�ves da chamada
   * do output do component incluir publicacao
   * via eventEmit
   */
  public atualizarTimeLine(): void {
    console.log("chegamos at� aqui")
    this.publicacoes.atualizarTimeLine()
  }
}
