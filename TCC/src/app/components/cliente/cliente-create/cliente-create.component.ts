import { Router } from '@angular/router';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  public erro = new FormControl('', [Validators.required]);

  cliente: Cliente = {
    nome: ''
  }

  constructor(private clienteServico: ClienteService,
              private router: Router) {}

  ngOnInit() {
  }

  criarCliente(): void {
    this.clienteServico.post(this.cliente).subscribe(() => {
      this.clienteServico.showMessage('Cliente criado com sucesso!')
      this.router.navigate(['/clientes']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

}
