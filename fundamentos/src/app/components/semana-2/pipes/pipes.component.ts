import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'pipes-componente',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  mensagemEnviada!: string;

  ligaParaTelefone(telefone: string) {
    console.log(telefone);
    return telefone;
  }

  onSubmit(form: NgForm) {
    this.mensagemEnviada = form.value.nome;
  }
}
