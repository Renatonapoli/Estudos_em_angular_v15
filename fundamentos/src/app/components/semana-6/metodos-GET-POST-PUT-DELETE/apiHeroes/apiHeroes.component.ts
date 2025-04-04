import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'api-heroes',
  templateUrl: './apiHeroes.component.html',
})
export class ApiHeroesComponent implements OnInit {
  pokemons: Pokemon[] = [];
  apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  // getPokemons(): void {
  //   this.http.get<any>(this.apiUrl).subscribe((response) => {
  //     const results = response.results;

  //     const pokemonRequests = results.map((pokemon: Pokemon) =>
  //       this.http.get<any>(pokemon.url)
  //     );

  //     Promise.all(pokemonRequests.map((req: any) => req.toPromise())).then(
  //       (pokemons) => {
  //         console.log(pokemons);
  //         this.pokemons = pokemons.map((p) => ({
  //           name: p.name,
  //           url: p.sprites.front_default,
  //           id: p.id,
  //           types: p.types.map((t: any) => t.type.name),
  //         }));
  //       }
  //     );
  //   });
  // }

  getPokemons(): void {
    this.http
      .get<any>(this.apiUrl)
      .pipe(
        switchMap((response) => {
          const pokemonRequests = response.results.map((pokemon: any) =>
            this.http.get<any>(pokemon.url)
          );
          return forkJoin(pokemonRequests) as Observable<any[]>;
        }),
        map((pokemons) =>
          pokemons.map((p: any) => ({
            name: p.name,
            url: p.sprites.front_default,
            id: p.id,
            types: p.types.map((t: any) => t.type.name),
          }))
        )
      )
      .subscribe((formattedPokemons) => {
        this.pokemons = formattedPokemons;
      });
  }
}
