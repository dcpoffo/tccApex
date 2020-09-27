import { MensagemService } from './../../../services/mensagem.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.scss']
})
export class ProdutoCreateComponent implements OnInit {

  produtoForm = new FormGroup({
    descricao: new FormControl('', [Validators.required]),
    unidadeMedida: new FormControl('', [Validators.required])
  });

  produto: Produto = {
    descricao: '',
    unidadeMedida: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private produtoServico: ProdutoService,
    private mensagemServico: MensagemService,
    private router: Router
  ) {}

  ngOnInit() { }

  criarProduto(): void {
    this.produtoServico.post(this.produto).subscribe(() => {
      this.mensagemServico.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }

}
