import { Pokemon } from './../../../fundamentos/src/app/components/semana-6/metodos-GET-POST-PUT-DELETE/pokemon';
import { Component, EventEmitter } from '@angular/core';
import { PokemonDetalhes, PokemonService } from './service/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'busca-pokemon';

  arrayPokemons: any[] = [];
  pokemonSelecionado: PokemonDetalhes | null = null;

  constructor(private servicePokemon: PokemonService) {}

  ngOnInit(): void {
    this.servicePokemon.getPokemons().subscribe({
      next: (pokemon) => (this.arrayPokemons = pokemon),
    });
  }

  buscarDetalhes(nome: string) {
    this.servicePokemon.getPokemonSelecionado(nome).subscribe({
      next: (pokemon) => {
        this.pokemonSelecionado = pokemon;
        console.log('Pokémon selecionado:', pokemon);
      },
      error: (err: any) => console.error('Erro ao buscar o detalhes:', err),
    });
  }
}
