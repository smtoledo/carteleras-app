import { Component, OnInit } from '@angular/core';
import { CarteleraService, AuthenticationService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { Cartelera, Publicacion, User } from 'src/app/_models';

@Component({
  selector: 'app-cartelera-view',
  templateUrl: './cartelera-view.component.html',
  styleUrls: ['./cartelera-view.component.scss']
})
export class CarteleraViewComponent implements OnInit {

  cartelera_actual: Cartelera;
  publicaciones: Publicacion[];
  suscriptores: User[];
  currentUser: User;
  
  constructor(private carteleraService: CarteleraService,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.carteleraService.getCartelera(params['id']).subscribe(
          data => { this.cartelera_actual = data; }
        );
      }
    });
  }

  get isLoggedIn() {
    return this.currentUser != null;
  }

  isRol(rol: string) {
    return this.currentUser.perfil == rol;
  }

  get isSuscribed() {
    return true;
  }

  verSuscriptos() {
    alert("suscriptos");
  }
  
  suscribirse(action) {
    if (action){
      this.carteleraService.suscribirUsuario(
        this.cartelera_actual.id, this.currentUser).subscribe(
          data => { this.suscriptores = data; }
        );
    }
  }
  
}
