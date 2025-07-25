import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss'],
})
export class CardPokemonComponent {
  @Input() nome: string = '';
  @Input() imagem: string = '';
  @Output() dados = new EventEmitter<string>();

  dadosPokemon() {
    this.dados.emit(this.nome);
  }
}
