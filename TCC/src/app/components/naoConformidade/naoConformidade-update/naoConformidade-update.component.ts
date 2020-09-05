import { NaoConformidade } from './../../../models/NaoConformidade';
import { Component, OnInit } from '@angular/core';
import { NaoConformidadeService } from 'src/app/services/naoConformidade.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-naoConformidade-update',
  templateUrl: './naoConformidade-update.component.html',
  styleUrls: ['./naoConformidade-update.component.scss']
})
export class NaoConformidadeUpdateComponent implements OnInit {

  naoConformidade: NaoConformidade;

  constructor(
    private naoConformidadeServico: NaoConformidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.naoConformidadeServico.getById(id).subscribe((naoConformidade) => {
      this.naoConformidade = naoConformidade;
      console.log(naoConformidade);
    });
  }

  atualizarNaoConformidade(): void {
    this.naoConformidadeServico.put(this.naoConformidade).subscribe(() => {
      this.naoConformidadeServico.showMessage('Não Conformidade atualizada com sucesso!');
      this.router.navigate(['/naoConformidades']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/naoConformidades']);
  }

}
