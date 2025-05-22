import { Component } from '@angular/core';
import { PokemonsService } from './service/pokemons.service';
import { SuperHeroisService } from './service/superHerois.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto1';
  listaPokemons: any[] = [];
  listaDeHerois: any[] = [];

  constructor(
    private pokemonsService: PokemonsService,
    private superHeroisService: SuperHeroisService
  ) {}

  ngOnInit() {
    // this.pokemons()
    this.superHerois();
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
        console.log(this.listaDeHerois);
      },
    });
  }
}
