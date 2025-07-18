import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme, FilmesResponse } from '../models/filme';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  private token = '4a29a985';
  private urlBase = 'https://www.omdbapi.com';

  constructor(private http: HttpClient) {}

  buscar(tipo: string): Observable<Filme> {
    return this.http.get<Filme>(
      `${this.urlBase}/?t=${tipo}/&apiKey=${this.token}`
    );
  }

  filtrar(search: string): Observable<FilmesResponse> {
    return this.http.get<FilmesResponse>(
      `${this.urlBase}/?s=${search}/&apiKey=${this.token}`
    );
  }
}
