import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { HERO_IDS } from '../assets/idsHerois/herois-ids';

@Injectable({
  providedIn: 'root',
})
export class HeroisDcService {
  private url: string = '/api';

  constructor(private http: HttpClient) {}

  getHerois(): Observable<any> {
    const request = HERO_IDS.map((id) =>
      this.http.get<any>(`${this.url}/${id}`)
    );
    return forkJoin(request);
  }
}
