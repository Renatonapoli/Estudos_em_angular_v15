import { Component } from '@angular/core';
import { ProdutosService } from './service/produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'teste-itau';

  produtos: any[] = [];

  abrirModalContato: boolean = false;
  abrirModalSucesso: boolean = false;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.getProdutos().subscribe((itemProduto) => {
      this.produtos = itemProduto;
    });
  }

  saibaMais() {
    this.abrirModalContato = true;
  }

  fecharModalContato() {
    this.abrirModalContato = false;
  }

  fecharModalSucesso() {
    this.abrirModalSucesso = false;
  }

  solicitarContato() {
    this.abrirModalSucesso = true;
    this.fecharModalContato();
  }
}
