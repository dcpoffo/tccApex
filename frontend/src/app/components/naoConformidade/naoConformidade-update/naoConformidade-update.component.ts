import { ProdutoService } from 'src/app/services/produto.service';
import { MensagemService } from './../../../services/mensagem.service';
import { NaoConformidade } from './../../../models/NaoConformidade';
import { Component, OnInit } from '@angular/core';
import { NaoConformidadeService } from 'src/app/services/naoConformidade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { Cliente } from 'src/app/models/Cliente';
import { Problema } from 'src/app/models/Problema';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProblemaService } from 'src/app/services/problema.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-naoConformidade-update',
  templateUrl: './naoConformidade-update.component.html',
  styleUrls: ['./naoConformidade-update.component.scss']
})
export class NaoConformidadeUpdateComponent implements OnInit {

  naoConformidadeForm = new FormGroup({
    id: new FormControl(''),
    dataAbertura: new FormControl('', [Validators.required]),
    cliente: new FormControl('', [Validators.required]),
    produto: new FormControl('', [Validators.required]),
    problema: new FormControl('', [Validators.required]),
    quantidade: new FormControl('')
  });

  produtos: Produto[];
  clientes: Cliente[];
  problemas: Problema[];

  naoConformidade: NaoConformidade;

  constructor(
    private naoConformidadeServico: NaoConformidadeService,
    private router: Router,
    private route: ActivatedRoute,
    private mesagemServico: MensagemService,
    private produtoServico: ProdutoService,
    private clienteServico: ClienteService,
    private problemaServico: ProblemaService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.naoConformidadeServico.getById(id).subscribe((naoConformidade) => {
      this.naoConformidade = naoConformidade;
      console.log(naoConformidade);
    });

    this.carregarProdutos();
    this.carregarClientes();
    this.carregarProblemas();
  }

  atualizarNaoConformidade(): void {
    this.naoConformidadeServico.put(this.naoConformidade).subscribe(() => {
      this.mesagemServico.showMessage('Não Conformidade atualizada com sucesso!');
      this.router.navigate(['/naoConformidades']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/naoConformidades']);
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

}
