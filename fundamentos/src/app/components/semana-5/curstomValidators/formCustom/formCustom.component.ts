import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name.validador';

@Component({
  selector: 'forms-validators',
  templateUrl: './formCustom.component.html',
  styles: ['.alert{color: red }'],
})
export class FormCustomValidatorsComponent implements OnInit {
  nome: string = '';

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nomeInput: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
        forbiddenNameValidator(/bob/i),
      ]),
    });
  }

  get nomeInputForm() {
    return this.formulario.get('nomeInput');
  }
}
