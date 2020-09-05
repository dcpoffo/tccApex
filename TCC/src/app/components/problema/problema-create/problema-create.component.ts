import { ProblemaService } from './../../../services/problema.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Problema } from 'src/app/models/Problema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problema-create',
  templateUrl: './problema-create.component.html',
  styleUrls: ['./problema-create.component.scss']
})
export class ProblemaCreateComponent implements OnInit {

  public erro = new FormControl('', [Validators.required]);

  problema: Problema = {
    descricao: ''
  }

  constructor(private problemaServico: ProblemaService,
              private router: Router) {}

  ngOnInit() {
  }

  cadastrarCliente(): void {
    this.problemaServico.post(this.problema).subscribe(() => {
      this.problemaServico.showMessage('Problema cadastrado com sucesso!')
      this.router.navigate(['/problemas']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/problemas']);
  }

}
