import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  { path: 'usuario/list', component: UsuarioListComponent },
  { path: 'usuario/new', component: UsuarioNewComponent },
  { path: 'usuario/edit/:id', component: UsuarioNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
