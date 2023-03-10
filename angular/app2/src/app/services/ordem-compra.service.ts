import { URL_API } from './../app.api';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Pedido } from './../../shared/pedido.model';
@Injectable()
export class OrdemCompraService {

  constructor(private http: Http){}

  public efetivarCompra(pedido: Pedido): Observable<any> {
    let headers = new Headers()

    headers.append('Content-Type', 'application/json')

    return this.http.post(
      `${URL_API}pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers: headers})
    )
    .map((resposta: Response) => resposta.json().id)
  }
}
