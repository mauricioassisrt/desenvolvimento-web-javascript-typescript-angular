import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Frase} from 'app/shared/frase.model';
import {FRASES} from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  constructor() {
    this.atualizaRodada()
  }
  ngOnDestroy() {
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value

  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      this.rodada++
      this.atualizaRodada()
      this.progresso += (100 / this.frases.length)
      if(this.rodada === 4) {
        alert("Acertou todas as questões !!!")
        this.encerrarJogo.emit('vitoria')
      }
    } else {
      this.tentativas--
      if (this.tentativas === -1) {
        alert('As tentativas acabaram ! :(')
        this.encerrarJogo.emit('derrota')
      }
    }
    /*trocar pergunta rodada*/
    if (this.rodada == this.frases.length)
        this.rodada = 0

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
