import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.scss']
})
export class ProdutoCreateComponent implements OnInit {

  produto: Produto = {
    descricao: '',
    unidadeMedida: ''
  }

  constructor(private produtoServico: ProdutoService,
              private router: Router) {}

  ngOnInit() {
  }

  criarProduto(): void {
    this.produtoServico.post(this.produto).subscribe(() => {
      this.produtoServico.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
