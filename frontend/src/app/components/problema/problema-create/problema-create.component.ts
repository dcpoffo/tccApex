import { ProblemaService } from './../../../services/problema.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Problema } from 'src/app/models/Problema';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-problema-create',
  templateUrl: './problema-create.component.html',
  styleUrls: ['./problema-create.component.scss']
})
export class ProblemaCreateComponent implements OnInit {

  problemaForm = new FormGroup({
    descricao: new FormControl('', [Validators.required])
  });

  problema: Problema = {
    descricao: ''
  }

  constructor(
    private problemaServico: ProblemaService,
    private router: Router,
    private mensagemServico: MensagemService
  ) { }

  ngOnInit() {
  }

  cadastrarCliente(): void {
    this.problemaServico.post(this.problema).subscribe(() => {
      this.mensagemServico.showMessage('Problema cadastrado com sucesso!')
      this.router.navigate(['/problemas']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/problemas']);
  }

}
