import {Oferta} from "../../shared/ofertas.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
import { Observable } from "rxjs";
import {URL_API} from '../app.api';
@Injectable()
export class OfertaService {
  constructor(private http: Http) { }
  public getOfertas(): Promise<Oferta[]> {
    return  this.http.get(`${URL_API}ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any)=> resposta.json())
  }
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }
  public getOfertaPorId(id:number):Promise<Oferta>{
      return this.http.get(`${URL_API}ofertas?id=${id}`)
        .toPromise()
        .then((resposta:any) => resposta.json().shift())
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}como-usar?id=${id}`)
      .toPromise()
      .then((resposta:any) => {
        return resposta.json()[0].descricao
      })
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`${URL_API}onde-fica?id=${id}`)
      .toPromise()
      .then((resposta:any) => {
        return resposta.json()[0].descricao
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}ofertas?descricao_oferta=${termo}`)
    .map((resposta: any) => resposta.json())
  }
}
