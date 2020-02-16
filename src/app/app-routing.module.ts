import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarteleraNewComponent } from './cartelera/cartelera-new/cartelera-new.component';
import { CartelerasHomeComponent } from './carteleras-home/carteleras-home.component';

const appRoutes: Routes = [
  { path: '', component: CartelerasHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: CartelerasHomeComponent },
  //{ path: 'cartelera', component: CarteleraNewComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'cartelera/new', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }