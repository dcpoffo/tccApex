import { MensagemService } from './../../../services/mensagem.service';
import { Cliente } from './../../../models/Cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.scss']
})
export class ClienteUpdateComponent implements OnInit {

  public erro = new FormControl('', [Validators.required]);

  cliente: Cliente;

  constructor(
    private clienteServico: ClienteService,
    private mensagemServico: MensagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.clienteServico.getById(id).subscribe((cliente) => {
      this.cliente = cliente;
      console.log(cliente);
    });
  }

  atualizarCliente(): void {
    this.clienteServico.put(this.cliente).subscribe(() => {
      this.mensagemServico.showMessage('Cliente atualizado com sucesso!');

      this.router.navigate(['/clientes']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

}
