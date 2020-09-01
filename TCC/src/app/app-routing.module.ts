import { ProdutoService } from 'src/app/services/produto.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { TituloComponent } from './views/titulo/titulo.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  //mesmo nome do routerlink do nav.component
  {
    path: 'titulo',
    component: TituloComponent
  },
  {
    path: 'produtos',
    component: ProdutoCrudComponent
  },
  {
    path: 'produtos/create',
    component: ProdutoCreateComponent
  },
  {
    path: 'produtos/update/:id',
    component: ProdutoUpdateComponent
  },
  {
    path: 'produtos/delete/:id',
    component: ProdutoDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
