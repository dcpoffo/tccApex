import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.scss']
})
export class ClienteCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Clientes',
      icon: 'person',
      routeUrl: '/clientes'
    };
  }

  ngOnInit() {
  }

  novoCliente(): void {
    this.router.navigate(['/clientes/create']);
  }

}
