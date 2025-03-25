import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenName } from './validadorPersonalizado/forbidden-name.validador';

@Component({
  selector: 'forms-valid',
  templateUrl: './formValid.component.html',
  styleUrls: ['./formValid.component.scss'],
})
export class FormsValidComponent implements OnInit {
  hero: any = {
    nome: '',
  };

  heroForm!: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      alterEgo: new FormControl(''),
      power: new FormControl('', [Validators.required]),
    });
  }

  get reactiveName() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }
}
