import { NaoConformidadeService } from './../../../services/naoConformidade.service';
import { NaoConformidade } from './../../../models/NaoConformidade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naoConformidade-read',
  templateUrl: './naoConformidade-read.component.html',
  styleUrls: ['./naoConformidade-read.component.scss']
})
export class NaoConformidadeReadComponent implements OnInit {

  naoConformidades: NaoConformidade[]
  displayedColumns = ['id', 'dataAbertura', 'cliente', 'produto', 'quantidade', 'problema', 'acoes'];

  constructor(
    private naoConformidadeServico: NaoConformidadeService
  ) { }

  ngOnInit() {
    this.naoConformidadeServico.getAll().subscribe(naoConformidades => {
      this.naoConformidades = naoConformidades;
      console.log(naoConformidades);
    });
  }
}
