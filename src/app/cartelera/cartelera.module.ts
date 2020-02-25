import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraNewComponent } from './cartelera-new/cartelera-new.component';
import { FormsModule } from '@angular/forms';
import { CarteleraViewComponent } from './cartelera-view/cartelera-view.component';
import { PublicacionNewComponent } from './publicacion-new/publicacion-new.component';
import { PublicacionListComponent } from './publicacion-list/publicacion-list.component';
import { CarteleraListComponent } from './cartelera-list/cartelera-list.component';
import { PublicacionViewComponent } from './publicacion-view/publicacion-view.component';

@NgModule({
  declarations: [
    CarteleraNewComponent,
    CarteleraViewComponent,
    PublicacionNewComponent,
    PublicacionListComponent,
    CarteleraListComponent,
    PublicacionViewComponent
  ],
  imports: [
    CommonModule,
    CarteleraRoutingModule,
    FormsModule
  ]
})
export class CarteleraModule { }
