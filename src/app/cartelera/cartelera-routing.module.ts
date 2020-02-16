import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteleraNewComponent } from './cartelera-new/cartelera-new.component';

const routes: Routes = [
  { path: 'cartelera/new', component: CarteleraNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteleraRoutingModule { }
