import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/template/nav/nav.component';


import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

import { ProblemaCrudComponent } from './views/problema-crud/problema-crud.component';
import { ProblemaCreateComponent } from './components/problema/problema-create/problema-create.component';
import { ProblemaReadComponent } from './components/problema/problema-read/problema-read.component';
import { ProblemaUpdateComponent } from './components/problema/problema-update/problema-update.component';
import { ProblemaDeleteComponent } from './components/problema/problema-delete/problema-delete.component';

import { NaoConformidadeCrudComponent } from './views/naoConformidade-crud/naoConformidade-crud.component';
import { NaoCorformidadeCreateComponent } from './components/naoConformidade/naoCorformidade-create/naoCorformidade-create.component';
import { NaoConformidadeReadComponent } from './components/naoConformidade/naoConformidade-read/naoConformidade-read.component';
import { NaoConformidadeUpdateComponent } from './components/naoConformidade/naoConformidade-update/naoConformidade-update.component';
import { NaoConformidadeDeleteComponent } from './components/naoConformidade/naoConformidade-delete/naoConformidade-delete.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavComponent,
    ProdutoCrudComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ProblemaCrudComponent,
    ProblemaCreateComponent,
    ProblemaReadComponent,
    ProblemaUpdateComponent,
    ProblemaDeleteComponent,
    NaoConformidadeCrudComponent,
    NaoCorformidadeCreateComponent,
    NaoConformidadeReadComponent,
    NaoConformidadeUpdateComponent,
    NaoConformidadeDeleteComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
