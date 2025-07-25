import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap, map } from 'rxjs';

export interface PokemonBase {
  nome: string;
  url: string;
}

export interface PokemonRequest {
  results: PokemonBase[];
}

export interface PokemonDetalhes {
  weight: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private urlBase = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<{ nome: string; imagem: string }[]> {
    return this.http.get<PokemonRequest>(this.urlBase).pipe(
      switchMap((response) => {
        const request: Observable<PokemonDetalhes>[] = response.results.map(
          (pokemon) => this.http.get<PokemonDetalhes>(pokemon.url)
        );
        return forkJoin(request);
      }),
      map((result) =>
        result.map((pokemon) => ({
          nome: pokemon.name,
          imagem: pokemon.sprites.front_default,
        }))
      )
    );
  }

  getPokemonSelecionado(nome: string): Observable<PokemonDetalhes> {
    return this.http.get<PokemonDetalhes>(`${this.urlBase}/${nome}`);
  }
}
