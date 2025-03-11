import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<[]> {
    return this.http
      .get<any>(this.urlPokemon)
      .pipe(
        map((response) => response.results.map((pokemon: any) => pokemon.name))
      );
  }

  log(message: string): void {
    console.log(`LOG: ${message}`);
  }
}
