import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

interface PokemonBasic {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: PokemonBasic[];
}

interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<{ nome: string; imagem: string }[]> {
    return this.http.get<PokemonListResponse>(this.url).pipe(
      switchMap((response) => {
        const request: Observable<PokemonDetail>[] = response.results.map(
          (pokemon) => this.http.get<PokemonDetail>(pokemon.url)
        );
        return forkJoin(request);
      }),
      map((pokemons: PokemonDetail[]) =>
        pokemons.map((pokemon) => ({
          nome: pokemon.name,
          imagem: pokemon.sprites.front_default,
        }))
      )
    );
  }
}
