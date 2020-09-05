import { NaoConformidadeService } from './../../../services/naoConformidade.service';
import { NaoConformidade } from './../../../models/NaoConformidade';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-naoConformidade-delete',
  templateUrl: './naoConformidade-delete.component.html',
  styleUrls: ['./naoConformidade-delete.component.scss']
})
export class NaoConformidadeDeleteComponent implements OnInit {

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
    });
  }

  apagarNaoConformidade(): void {
    this.naoConformidadeServico.delete(this.naoConformidade.id).subscribe(() => {
      this.naoConformidadeServico.showMessage('Não Conformidade excluida com sucesso!');
      this.router.navigate(['/naoConformidades']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/naoConformidades']);
  }

}
