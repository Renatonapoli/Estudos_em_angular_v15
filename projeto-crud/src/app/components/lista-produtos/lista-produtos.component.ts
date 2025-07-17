import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/service/produtos.service';

@Component({
  selector: 'lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss'],
})
export class ListaProdutosComponent {
  produtos: Produto[] = [];
  produtoEditando: Produto | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.listar().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  salvar(produto: Produto): void {
    if (produto.id) {
      this.produtoService.atualizar(produto).subscribe(() => {
        this.produtoEditando = null;
        this.listarProdutos();
      });
    } else {
      const produtoSemId = {
        nome: produto.nome,
        preco: produto.preco,
      };
      this.produtoService.salvar(produtoSemId).subscribe(() => {
        this.listarProdutos();
      });
    }
  }

  editar(produto: Produto): void {
    this.produtoEditando = { ...produto };
  }

  deletar(id: number): void {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.produtoService.deletar(id).subscribe(() => {
        this.listarProdutos();
      });
    }
  }
}
