import { Component, Input } from '@angular/core';

@Component({
  selector: 'busca-filmes',
  templateUrl: './card-fime.component.html',
  styleUrls: ['./card-filme-component.scss'],
})
export class BuscaFilmesComponent {
  @Input() titulo: string = '';
  @Input() sinopse?: string = '';
  @Input() imagem: string = '';
}
