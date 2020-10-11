import { Router, ActivatedRoute } from '@angular/router';
import { Problema } from './../../../models/Problema';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProblemaService } from 'src/app/services/problema.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-problema-update',
  templateUrl: './problema-update.component.html',
  styleUrls: ['./problema-update.component.scss']
})
export class ProblemaUpdateComponent implements OnInit {

  problemaForm = new FormGroup({
    descricao: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)])
  });

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

  public temErro = (controlName: string, errorName: string) =>{
    return this.problemaForm.controls[controlName].hasError(errorName);
  }

}
