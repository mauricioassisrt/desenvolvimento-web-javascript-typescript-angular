import {Oferta} from "../../shared/ofertas.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertaService {
  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    return  this.http.get('http://localhost:3000/ofertas')
      .toPromise()
      .then((resposta: any)=> resposta.json())
  }
}
