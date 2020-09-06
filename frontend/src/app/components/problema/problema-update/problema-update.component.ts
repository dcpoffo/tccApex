import { Router, ActivatedRoute } from '@angular/router';
import { Problema } from './../../../models/Problema';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProblemaService } from 'src/app/services/problema.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-problema-update',
  templateUrl: './problema-update.component.html',
  styleUrls: ['./problema-update.component.scss']
})
export class ProblemaUpdateComponent implements OnInit {

  public erro = new FormControl('', [Validators.required]);

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
      console.log(problema);
    });
  }

  atualizarProblema(): void {
    this.problemaServico.put(this.problema).subscribe(() => {
      this.mensagemServico.showMessage('Problema atualizado com sucesso!');
      this.router.navigate(['/problemas']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/problemas']);
  }

}
