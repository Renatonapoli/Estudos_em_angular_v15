import { Component } from '@angular/core';
import { PokemonsService } from './service/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projeto-pokedex';

  listaPokemons: any[] = [];

  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit() {
    this.servicePokemons.getPokemons().subscribe((pokemon) => {
      this.listaPokemons = pokemon;
    });
  }
}
