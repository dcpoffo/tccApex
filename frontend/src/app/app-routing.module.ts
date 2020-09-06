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

// produto
import { ProblemaCrudComponent } from './views/problema-crud/problema-crud.component';
import { ProblemaCreateComponent } from './components/problema/problema-create/problema-create.component';
import { ProblemaUpdateComponent } from './components/problema/problema-update/problema-update.component';
import { ProblemaDeleteComponent } from './components/problema/problema-delete/problema-delete.component';

// nao conformidades
import { NaoConformidadeCrudComponent } from './views/naoConformidade-crud/naoConformidade-crud.component';
import { NaoCorformidadeCreateComponent } from './components/naoConformidade/naoCorformidade-create/naoCorformidade-create.component';
import { NaoConformidadeUpdateComponent } from './components/naoConformidade/naoConformidade-update/naoConformidade-update.component';
import { NaoConformidadeDeleteComponent } from './components/naoConformidade/naoConformidade-delete/naoConformidade-delete.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // produto
  { path: 'produtos', component: ProdutoCrudComponent },
  { path: 'produtos/create', component: ProdutoCreateComponent },
  { path: 'produtos/update/:id', component: ProdutoUpdateComponent },
  { path: 'produtos/delete/:id', component: ProdutoDeleteComponent },

  // cliente
  { path: 'clientes', component: ClienteCrudComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:id', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:id', component: ClienteDeleteComponent},

  // problema
  { path: 'problemas', component: ProblemaCrudComponent },
  { path: 'problemas/create', component: ProblemaCreateComponent },
  { path: 'problemas/update/:id', component: ProblemaUpdateComponent },
  { path: 'problemas/delete/:id', component: ProblemaDeleteComponent },

  // nao conformidades
  { path: 'naoConformidades', component: NaoConformidadeCrudComponent },
  { path: 'naoConformidades/create', component: NaoCorformidadeCreateComponent },
  { path: 'naoConformidades/update/:id', component: NaoConformidadeUpdateComponent },
  { path: 'naoConformidades/delete/:id', component: NaoConformidadeDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
