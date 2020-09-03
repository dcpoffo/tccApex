import { ProdutoService } from 'src/app/services/produto.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

// produto
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

// cliente
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  // produto
  { path: 'produtos', component: ProdutoCrudComponent },
  { path: 'produtos/create', component: ProdutoCreateComponent },
  { path: 'produtos/update/:id', component: ProdutoUpdateComponent },
  { path: 'produtos/delete/:id', component: ProdutoDeleteComponent },

  // cliente
  { path: 'clientes', component: ClienteCrudComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:id', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:id', component: ClienteDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
