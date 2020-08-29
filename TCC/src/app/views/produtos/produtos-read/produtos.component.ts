
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Produto } from 'src/app/models/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public titulo = 'PRODUTOS';
  public produtoSelecionado: Produto;
  public produtoForm: FormGroup;
  public modo = 'post';

  public produtos = [];

  constructor(private formBuilder: FormBuilder,
    private produtoServico: ProdutoService,
    private dialogService: DialogService,
    private router: Router) {
    this.criarForm();
  }

  criarForm() {
    this.produtoForm = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      unidadeMedida: ['', Validators.required]
    });
  }

  carregarProdutos() {
    this.produtoServico.getAll().subscribe(
      (resultado: Produto[]) => {
        this.produtos = resultado;
        this.router.navigate(['produtos/produtos-read']);
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

editarProduto(): void {
this.router.navigate(['produtos/produtos-crud']);
}

novoProduto(): void {
  this.router.navigate(['produtos/produtos-crud']);
  }

  ngOnInit() {
    this.carregarProdutos();
  }

}
