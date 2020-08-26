import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { TituloComponent } from './views/titulo/titulo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'titulo', component: TituloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
