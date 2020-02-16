import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartelerasHomeComponent } from './carteleras-home/carteleras-home.component';
import { CarteleraNewComponent } from './cartelera/cartelera-new/cartelera-new.component';
import { AppRoutingModule } from './app-routing.module'
import { CarteleraModule } from './cartelera/cartelera.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarteleraNewComponent,
    PageNotFoundComponent,
    CartelerasHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarteleraModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
