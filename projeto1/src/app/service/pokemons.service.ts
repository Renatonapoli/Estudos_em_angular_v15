import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { PokemonListResponse } from '../../assets/interfaces/PokemonListResponse.interface';
import { PokemonDetalhado } from '../../assets/interfaces/PokemonDetalhado.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private api: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private http: HttpClient) {}

  getPokemonsComImagem(): Observable<PokemonDetalhado[]> {
    return this.http.get<PokemonListResponse>(this.api).pipe(
      switchMap((response) => {
        const requests = response.results.map((pokemons: any) =>
          this.http.get<any>(pokemons.url).pipe(
            map((details) => ({
              name: pokemons.name,
              image: details.sprites.front_default,
            }))
          )
        );
        return forkJoin(requests);
      })
    );
  }
}
