import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickardMortyService {
  // private url: string = 'https://rickandmortyapi.com/api/character';
  private url: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  //TODO Chamando a API direto pelo endpoint characters

  // getRichardyMortyAll(): Observable<any> {
  //   return this.http.get<any>(this.url).pipe(
  //     map((response) =>
  //       response.results.map((perso: any) => ({
  //         nome: perso.name,
  //         imagem: perso.image,
  //       }))
  //     )
  //   );
  // }

  //TODO Passando pela primeira chamada até chegar na chamada dos characters

  getRichardyMortyAll(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      switchMap((response) => {
        const responseCharacters = response.characters;
        return this.http.get<any>(responseCharacters);
      }),
      map((persona) =>
        persona.results.map((results: any) => ({
          nome: results.name,
          imagem: results.image,
        }))
      )
    );
  }
}
