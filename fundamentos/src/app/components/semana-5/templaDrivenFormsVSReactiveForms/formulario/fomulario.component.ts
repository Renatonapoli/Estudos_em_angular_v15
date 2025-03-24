import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'formulario-component',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  corFavoritaControl = new FormControl('');
  corFavorita: string = '';

  formularioNome = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
  });

  atualizaNome() {
    this.corFavoritaControl.setValue('Renato');
  }

  onSubmit() {
    console.warn(this.formularioNome.value);
  }
}
