import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-crud',
  templateUrl: './produto-crud.component.html',
  styleUrls: ['./produto-crud.component.scss']
})
export class ProdutoCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarParaProdutoCriar(): void {
    this.router.navigate(['/produtos/create'])
  }

}
