import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concatMap,
  forkJoin,
  from,
  map,
  mergeMap,
  Observable,
  scan,
  tap,
  toArray,
} from 'rxjs';
import { HERO_IDS } from '../assets/idsHerois/herois-ids';

@Injectable({
  providedIn: 'root',
})
export class HeroisDcService {
  private url: string = '/api';

  constructor(private http: HttpClient) {}

  getHerois(): Observable<any> {
    /*
    Quando usar forkJoin?

    Todas as chamadas devem ser feitas ao mesmo tempo.
    Os dados só podem ser usados depois que todas as chamadas terminarem.
    A API não tem limite de requisições simultâneas.
    */

    // const request = HERO_IDS.map((id) =>
    //   this.http.get<any>(`${this.url}/${id}`)
    // );
    // return forkJoin(request);
    //--------------------------------------------------------------
    /*
    Quando usar?

    Se a API tiver limites de requisições simultâneas.
    Se for importante manter a ordem das respostas.
    Se uma requisição depender da anterior.
    */

    // return from(HERO_IDS).pipe(
    //   concatMap((id) => this.http.get<any>(`${this.url}/${id}`)),
    //   toArray()
    // );
    //--------------------------------------------------------

    /*
    Quando usar?

    Quando não precisa esperar todas as respostas para processar os dados.
    Se quiser exibir os resultados conforme forem chegando, sem esperar todas terminarem.
    */
    return from(HERO_IDS).pipe(
      mergeMap((id) => this.http.get<any>(`${this.url}/${id}`)),

      /*
    Se ainda quiser usar mergeMap, mas quer acumular os resultados sem esperar todas terminarem:
    */
      scan((acc: any[], heroi) => [...acc, heroi], [])
    );
  }
}
