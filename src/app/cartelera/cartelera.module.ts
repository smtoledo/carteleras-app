import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarteleraRoutingModule } from './cartelera-routing.module';
import { CarteleraNewComponent } from './cartelera-new/cartelera-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarteleraNewComponent
  ],
  imports: [
    CommonModule,
    CarteleraRoutingModule,
    FormsModule
  ]
})
export class CarteleraModule { }
