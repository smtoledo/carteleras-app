import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioNewComponent } from './usuario-new/usuario-new.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioNewComponent, UsuarioListComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ]
})
export class UsuarioModule { }
