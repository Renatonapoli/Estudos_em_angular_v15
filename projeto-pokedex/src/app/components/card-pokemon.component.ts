import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-component.component.scss'],
})
export class CardPokemonComponent {
  title = 'card-pokemon';

  @Input() imagemPokemon: string = '';
  @Input() nome: string = '';
}
