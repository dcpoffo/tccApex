import { ProblemaService } from './../../../services/problema.service';
import { Problema } from './../../../models/Problema';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-problema-delete',
  templateUrl: './problema-delete.component.html',
  styleUrls: ['./problema-delete.component.scss']
})
export class ProblemaDeleteComponent implements OnInit {

  problema: Problema;

  constructor(
    private problemaServico: ProblemaService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemServico: MensagemService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.problemaServico.getById(id).subscribe((problema) => {
      this.problema = problema;
    });
  }

  apagarProblema(): void {
    this.problemaServico.delete(this.problema.id).subscribe(() => {
      this.mensagemServico.showMessage('Problema excluido com sucesso!');
      this.router.navigate(['/problemas']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/problemas']);
  }

}
