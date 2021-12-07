import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template/template.component';
import { CadastrarFuncionarioComponent } from './components/views/Funcionario/Cadastrar-Funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { CadastrarFolhaComponent } from './components/views/FolhaPagamento/Cadastrar-Folha/cadastrar-folha/cadastrar-folha.component';
import { ListarFolhaComponent } from './components/views/FolhaPagamento/Listar-Folha/listar-folha/listar-folha.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    CadastrarFuncionarioComponent,
    CadastrarFolhaComponent,
    ListarFolhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
