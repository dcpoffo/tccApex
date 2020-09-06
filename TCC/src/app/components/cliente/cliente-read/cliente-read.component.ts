import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[]
  displayedColumns = ['id', 'nome', 'acoes'];

  constructor(
    private clienteServico: ClienteService
  ) { }

  ngOnInit() {
    this.clienteServico.getAll().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

}
