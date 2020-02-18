import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraNewComponent } from './cartelera-new/cartelera-new.component';
import { FormsModule } from '@angular/forms';
import { CarteleraViewComponent } from './cartelera-view/cartelera-view.component';
import { PublicacionNewComponent } from './publicacion-new/publicacion-new.component';

@NgModule({
  declarations: [
    CarteleraNewComponent,
    CarteleraViewComponent,
    PublicacionNewComponent
  ],
  imports: [
    CommonModule,
    CarteleraRoutingModule,
    FormsModule
  ]
})
export class CarteleraModule { }
