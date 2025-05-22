import { Component } from '@angular/core';
import { PokemonsService } from './service/pokemons.service';
import { SuperHeroisService } from './service/superHerois.service';
import { RickardMortyService } from './service/rickandmorty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto1';
  listaPokemons: any[] = [];
  listaDeHerois: any[] = [];
  listaRickand: any[] = [];

  constructor(
    private pokemonsService: PokemonsService,
    private superHeroisService: SuperHeroisService,
    private rickardMortyService: RickardMortyService
  ) {}

  ngOnInit() {
    // this.pokemons()
    // this.superHerois();
    this.rickandMorty();
  }

  pokemons() {
    this.pokemonsService.getPokemonsComImagem().subscribe({
      next: (data) => {
        this.listaPokemons = data;
      },
    });
  }

  superHerois() {
    this.superHeroisService.getSuperHerois().subscribe({
      next: (heroi) => {
        this.listaDeHerois = heroi;
      },
    });
  }

  rickandMorty() {
    this.rickardMortyService.getRichardyMortyAll().subscribe({
      next: (data) => {
        this.listaRickand = data;
        console.log(this.listaRickand);
      },
    });
  }
}
