import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-problema-crud',
  templateUrl: './problema-crud.component.html',
  styleUrls: ['./problema-crud.component.scss']
})
export class ProblemaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Problemas',
      icon: 'report_problem',
      routeUrl: '/problemas'
    };
  }

  ngOnInit() {
  }

  novoProblema(): void {
    this.router.navigate(['/problemas/create']);
  }

}
