import { MensagemService } from './../../../services/mensagem.service';
import { Router } from '@angular/router';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
  });

  cliente: Cliente = {
    nome: ''
  };

  constructor(
    private clienteServico: ClienteService,
    private mensagemServico: MensagemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  criarCliente(): void {
    this.clienteServico.post(this.cliente).subscribe(() => {
      this.mensagemServico.showMessage('Cliente criado com sucesso!')
      this.router.navigate(['/clientes']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

  public temErro = (controlName: string, errorName: string) =>{
    return this.clienteForm.controls[controlName].hasError(errorName);
  }

}
