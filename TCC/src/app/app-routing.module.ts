import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos-read/produtos.component';
import { ProdutosCrudComponent } from './views/produtos/produtos-crud/produtos-crud.component';
import { TituloComponent } from './views/titulo/titulo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  //mesmo nome do routerlink do nav.component
  { path: 'produtos/produtos-read', component: ProdutosComponent },
  { path: 'produtos/produtos-crud', component: ProdutosCrudComponent },
  { path: 'titulo', component: TituloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
