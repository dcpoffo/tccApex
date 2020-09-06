import { ProblemaService } from 'src/app/services/problema.service';
import { ClienteService } from './../../../services/cliente.service';
import { Problema } from 'src/app/models/Problema';
import { ProdutoService } from 'src/app/services/produto.service';
import { NaoConformidade } from './../../../models/NaoConformidade';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NaoConformidadeService } from 'src/app/services/naoConformidade.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Produto } from 'src/app/models/Produto';
import { Cliente } from 'src/app/models/Cliente';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-naoCorformidade-create',
  templateUrl: './naoCorformidade-create.component.html',
  styleUrls: ['./naoCorformidade-create.component.scss']
})
export class NaoCorformidadeCreateComponent implements OnInit {

  produtos: Produto[];
  clientes: Cliente[];
  problemas: Problema[];

  naoConformidade: NaoConformidade = {
    dataAbertura: null,
    quantidade: 0,
    clienteId: 0,
    produtoId: 0,
    problemaId: 0,
  };

  constructor(
    private naoConformidadeServico: NaoConformidadeService,
    private produtoServico: ProdutoService,
    private clienteServico: ClienteService,
    private problemaServico: ProblemaService,
    private router: Router,
    private mensagemServico: MensagemService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
    this.carregarClientes();
    this.carregarProblemas();
  }

  carregarProblemas(): void {
    this.problemaServico.getAll().subscribe(prob => {
      this.problemas = prob;
    });
  }

  carregarClientes(): void {
    this.clienteServico.getAll().subscribe(cli => {
      this.clientes = cli;
    });
  }

  carregarProdutos(): void {
    this.produtoServico.getAll().subscribe(prod => {
      this.produtos = prod;
    });
  }

  criarNaoConformidade(): void {
    console.log(this.naoConformidade);
    this.naoConformidadeServico.post(this.naoConformidade).subscribe(() => {
      this.mensagemServico.showMessage('Não Conformidade criada com sucesso!')
      this.router.navigate(['/naoConformidades']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/naoConformidades']);
  }
}
