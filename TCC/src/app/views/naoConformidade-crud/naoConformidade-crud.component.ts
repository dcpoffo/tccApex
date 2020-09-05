import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-naoConformidade-crud',
  templateUrl: './naoConformidade-crud.component.html',
  styleUrls: ['./naoConformidade-crud.component.scss']
})
export class NaoConformidadeCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Não Conformidades',
      icon: 'bug_report',
      routeUrl: '/naoConformidades'
    };
  }

  ngOnInit() {
  }

  novaNaoConformidade(): void {
    this.router.navigate(['/naoConformidades/create']);
  }

}
