import { ApiPokemonInterface, Pokemon } from './../assets/pokemon';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<ApiPokemonInterface>(this.urlApi).pipe(
      tap((pokemons) => console.log('pokemon :', pokemons)),
      map((response) =>
        response.results.map((pokemon) => ({
          nome: pokemon.name,
          url: pokemon.url,
        }))
      ),
      tap((pokemon) => console.log(pokemon))
    );
  }
}
