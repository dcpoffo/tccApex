import { MensagemService } from './../../../services/mensagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.scss']
})
export class ProdutoUpdateComponent implements OnInit {

  public erro = new FormControl('', [Validators.required]);

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
      console.log(produto);
    });
  }

  atualizarProduto(): void {
    this.produtoServico.put(this.produto).subscribe(() => {
      this.mensagemServico.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

}
