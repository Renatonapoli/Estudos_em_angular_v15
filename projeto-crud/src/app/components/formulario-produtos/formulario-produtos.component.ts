import { Component, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'formulario-produtos',
  templateUrl: './formulario-produtos.component.html',
  styleUrls: ['./formulario-produtos.component.scss'],
})
export class FormularioProdutosComponent {
  @Input() produtoEditando: Produto | null = null;
  @Input() aoSalvar = new EventEmitter<Produto>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      preco: [0, [Validators.required, Validators.min(0.01)]],
    });

    if (this.produtoEditando) {
      this.form.patchValue(this.produtoEditando);
    }
  }

  submit(): void {
    if (this.form.valid) {
      const produto: Produto = {
        ...this.produtoEditando,
        ...this.form.value,
      };
      this.aoSalvar.emit(produto);
      this.form.reset();
    }
  }
}
