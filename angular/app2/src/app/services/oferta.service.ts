import {Oferta} from "../../shared/ofertas.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertaService {
  constructor(private http: Http) { }
  private url: string = "http://localhost:3000/ofertas"
  public getOfertas(): Promise<Oferta[]> {
    return  this.http.get(`${this.url}?destaque=true`)
      .toPromise()
      .then((resposta: any)=> resposta.json())
  }
  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${this.url}?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }
}
