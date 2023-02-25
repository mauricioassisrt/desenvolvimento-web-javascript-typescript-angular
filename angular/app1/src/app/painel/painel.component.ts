import {Component, OnInit} from '@angular/core';
import {Frase} from 'app/shared/frase.model';
import {FRASES} from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  constructor() {
    this.atualizaRodada()
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
      console.log(this.progresso)
      alert('Tradução correta')
    } else {
      alert('Traducao errada')
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
