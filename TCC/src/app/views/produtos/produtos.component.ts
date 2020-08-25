import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public produtos = [
    {id: 1, descricao: 'Produto 1', unidadeMedida: 'm'},
    {id: 2, descricao: 'Produto 2', unidadeMedida: 'm'},
    {id: 3, descricao: 'Produto 3', unidadeMedida: 'm'},
    {id: 4, descricao: 'Produto 4', unidadeMedida: 'm'},
    {id: 5, descricao: 'Produto 5', unidadeMedida: 'm'},
    {id: 6, descricao: 'Produto 6', unidadeMedida: 'm'},
    {id: 7, descricao: 'Produto 7', unidadeMedida: 'm'},
    {id: 8, descricao: 'Produto 8', unidadeMedida: 'm'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
