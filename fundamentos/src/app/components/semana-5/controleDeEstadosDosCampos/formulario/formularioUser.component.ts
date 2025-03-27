import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'formulario-user',
  templateUrl: './formularioUser.component.html',
  styleUrls: ['./formularioUser.component.scss'],
})
export class FormularioUserComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
  });

  get nome() {
    return this.form.get('nome');
  }

  get email() {
    return this.form.get('email');
  }
}
