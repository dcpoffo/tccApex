import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.scss']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[]
  displayedColumns = ['id', 'descricao', 'unidadeMedida', 'acoes']

  constructor(private produtoServico: ProdutoService) { }

  ngOnInit() {
    this.produtoServico.getAll().subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos);
    })
  }

}
