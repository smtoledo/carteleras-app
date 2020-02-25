import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteleraNewComponent } from './cartelera-new/cartelera-new.component';
import { CarteleraViewComponent } from './cartelera-view/cartelera-view.component';
import { AuthGuard } from '../_guards';
import { PublicacionNewComponent } from './publicacion-new/publicacion-new.component';
import { PublicacionViewComponent } from './publicacion-view/publicacion-view.component';

const routes: Routes = [
  { path: 'cartelera/new', component: CarteleraNewComponent },
  { path: 'cartelera/:id', component: CarteleraViewComponent },
  { path: 'cartelera/:id_cartelera/publicacion-new', component: PublicacionNewComponent },
  { path: 'cartelera/:id_cartelera/publicacion/:id_publicacion', component: PublicacionViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarteleraRoutingModule { }
