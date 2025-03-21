import { Component } from '@angular/core';

@Component({
  selector: 'fomulario-component',
  templateUrl: './fomulario.component.html',
})
export class FomularioComponent {
  formData: string = '';

  canExit(): boolean {
    return (
      this.formData === '' || confirm('Tem certeza que deseja sair sem salvar?')
    );
  }

  salvar() {
    alert('Salvo com sucesso!');
    this.formData = '';
  }
}
