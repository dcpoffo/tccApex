import { MensagemService } from './../../../services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../../services/produto.service';
import { Produto } from './../../../models/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.scss']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtoServico: ProdutoService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoServico.getById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  apagarProduto(): void {
    this.produtoServico.delete(this.produto.id).subscribe(() => {
      this.mensagemServico.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

}
