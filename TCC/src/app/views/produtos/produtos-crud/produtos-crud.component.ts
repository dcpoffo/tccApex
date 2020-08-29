import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Produto } from 'src/app/models/Produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-crud',
  templateUrl: './produtos-crud.component.html',
  styleUrls: ['./produtos-crud.component.css']
})
export class ProdutosCrudComponent implements OnInit {

  public alunoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private produtoServico: ProdutoService,
    private dialogService: DialogService,
    private router: Router) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarProdutos();
  }

  public titulo = 'PRODUTOS';
  public produtoSelecionado: Produto;
  public produtoForm: FormGroup;
  public modo = 'post';
  public produtos = [];

  produto: Produto = {
    descricao: '',
    unidadeMedida: ''
  }

  criarForm() {
    this.produtoForm = this.formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      unidadeMedida: ['', Validators.required]
    });
  }

  voltar() {
    this.produtoSelecionado = null;
  }

  novoProduto(): void {
    this.produtoSelecionado = new Produto();
    this.produtoForm.patchValue(this.produtoSelecionado);
  }

  produtoSubmit() {
    console.log(this.produtoForm.value);
    // this.salvarProduto(this.produtoForm.value);
    this.salvarTeste(this.produtoForm.value);
  }

  salvarTeste(produto: Produto) {
    console.log(produto);
    this.produtoServico.post(produto).subscribe(
      (retorno: Produto) => {
        console.log(retorno);
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }


   salvarProduto(produto: Produto) {
    (produto.id === 0 ? this.modo = 'post' : this.modo = 'put');

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

  carregarProdutos() {
    this.produtoServico.getAll().subscribe(
      (resultado: Produto[]) => {
        this.produtos = resultado;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  produtoSelect(produto: Produto) {
    this.produtoSelecionado = produto;
    this.produtoForm.patchValue(produto);
  }
}

