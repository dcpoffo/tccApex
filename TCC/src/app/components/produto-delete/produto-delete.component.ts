import { ProdutoService } from 'src/app/services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtoServico: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoServico.getById(id).subscribe((produto) => {
      this.produto = produto;
      console.log(produto);
    });
  }

  apagarProduto(): void {
    this.produtoServico.delete(this.produto.id).subscribe(() => {
      this.produtoServico.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

}
