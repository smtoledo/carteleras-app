import { Component, OnInit } from '@angular/core';
import { CarteleraService, AuthenticationService, UsuarioService } from 'src/app/_services';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Cartelera, Publicacion, User } from 'src/app/_models';
import { SeguidoresListComponent } from 'src/app/seguidores-list/seguidores-list.component';

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
  suscription: boolean = false;
  
  constructor(private carteleraService: CarteleraService,
    private usuarioService: UsuarioService,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.carteleraService.getCartelera(params['id']).subscribe(
          data => { 
            this.cartelera_actual = data; 
            if (this.currentUser.preferidas.indexOf(this.cartelera_actual.id) > -1)
              this.suscription = true;
          }
        );
      }
    });
  }

  get isLoggedIn() {
    return this.currentUser != null;
  }

  verSuscriptos(cartelera_id: number) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
            id: cartelera_id,
            dialogRef: this.dialog
        };
    
        this.dialog.open(SeguidoresListComponent, dialogConfig);
  }
  
  updateCurrentUserInfo(cartelera_id, action){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (action){
      currentUser.preferidas.push(cartelera_id);
    }else{
      let index = currentUser.preferidas.indexOf(cartelera_id);
      if (index > -1) {
        currentUser.preferidas.splice(index, 1);
      }
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  suscribirse(action) {
    if (action){
      this.usuarioService.suscribirCartelera(this.cartelera_actual, this.currentUser.username).subscribe(
          data => { 
            this.currentUser = data; 
            this.suscription = true; 
          }
        );
    }else{
      this.usuarioService.desuscribirCartelera(this.cartelera_actual, this.currentUser.username).subscribe(
          data => { 
            this.currentUser = data; 
            this.suscription = false; 
          }
        );
    }
    this.updateCurrentUserInfo(this.cartelera_actual.id, action);
  }
  
  isRol(rol_name) {
    return (this.currentUser.perfil.toUpperCase() == rol_name);
  }
}
