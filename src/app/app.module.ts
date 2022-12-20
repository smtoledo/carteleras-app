import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, TruncatePipe } from './_helpers';
import { MatDialogModule, MatButtonModule, MatListModule } from "@angular/material";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartelerasHomeComponent } from './carteleras-home/carteleras-home.component';
import { AppRoutingModule } from './app-routing.module'
import { CarteleraModule } from './cartelera/cartelera.module';
import { UsuarioModule } from './usuario/usuario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeguidoresListComponent } from './seguidores-list/seguidores-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    CartelerasHomeComponent,
    TruncatePipe,
    SeguidoresListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarteleraModule, //el orden importa!!
    UsuarioModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule  
  ],
  entryComponents: [
    SeguidoresListComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
