import { Problema } from './../../../models/Problema';
import { ProblemaService } from './../../../services/problema.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema-read',
  templateUrl: './problema-read.component.html',
  styleUrls: ['./problema-read.component.scss']
})
export class ProblemaReadComponent implements OnInit {

  problemas: Problema[]
  displayedColumns = ['id', 'descricao', 'acoes'];

  constructor(
    private problemaServico: ProblemaService
  ) { }

  ngOnInit() {
    this.problemaServico.getAll().subscribe(problemas => {
      this.problemas = problemas;
      console.log(problemas);
    });
  }

}
