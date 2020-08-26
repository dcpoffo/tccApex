import { Produto } from './../../models/Produto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';

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
              private produtoServico: ProdutoService) {
      this.criarForm();
  }

  criarForm() {
    this.produtoForm = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      unidadeMedida: ['', Validators.required]
    });
  }

voltar(){
  this.produtoSelecionado = null;
}

  produtoSubmit(){
    this.salvarProduto(this.produtoForm.value);
  }

  salvarProduto(produto: Produto){
    (produto.id === 0 ? this.modo = 'post'  : this.modo = 'put');

    this.produtoServico[this.modo](produto).subscribe(
      (retorno: Produto) => {
        console.log(retorno);
        this.carregarProdutos();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  carregarProdutos(){
    this.produtoServico.getAll().subscribe(
      (resultado: Produto[]) => {
        this.produtos = resultado;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  produtoSelect(produto: Produto){
    this.produtoSelecionado = produto;
    this.produtoForm.patchValue(produto);
  }

  novoProduto(){
    this.produtoSelecionado = new Produto();
    this.produtoForm.patchValue(this.produtoSelecionado);
  }

  ngOnInit() {
    this.carregarProdutos();
  }

}
