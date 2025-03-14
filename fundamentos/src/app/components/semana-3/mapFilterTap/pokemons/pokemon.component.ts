import { Component } from '@angular/core';
import { PokemonsService } from '../service/pokemons.service';
import { Pokemon } from '../assets/pokemon';

@Component({
  selector: 'pokemon-component',
  templateUrl: './pokemon.component.html',
  providers: [PokemonsService],
})
export class PokemonComponent {
  arrayPokemon: Pokemon[] = [];

  constructor(private pokemonService: PokemonsService) {}

  listaPokemons() {
    this.pokemonService.getPokemon().subscribe((pokemons) => {
      pokemons.map((pokemon) => this.arrayPokemon.push(pokemon));
    });
  }
}
