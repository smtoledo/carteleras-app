import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, UsuarioService } from 'src/app/_services';
import { User } from 'src/app/_models';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuarios: User[] = [];
  error: string = '';
  loading: boolean = false;
  currentUser: User;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private usuarioService: UsuarioService, 
    private activatedRoute: ActivatedRoute) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

  ngOnInit() {
    this.loading = true;
    this.usuarioService.getUsuarios().subscribe(
            data => {
                this.loading = false;
                debugger;
                this.usuarios = data;
            },
            error => {
                this.error = 'No se pudieron cargar usuarios';
                this.loading = false;
                console.error(error);
            }
        )
  }

  bajarCuenta(usuario: User, baja: boolean) {
    if (baja){
      if(confirm("Esta seguro que desea dar de baja esta cuenta de usuario?")) {
        this.usuarioService.actualizarCuenta(usuario.id,0).subscribe(data=> {
          let itemIndex = this.usuarios.findIndex(item => item.id == usuario.id);
          let user_updated = usuario;
          user_updated.cuentaActiva = 0;
          this.usuarios[itemIndex] = user_updated;
        })
      }  
    }else{
      if(confirm("Esta seguro que desea habilitar esta cuenta de usuario?")) {
          this.usuarioService.actualizarCuenta(usuario.id,1).subscribe(data=> {
            let itemIndex = this.usuarios.findIndex(item => item.id == usuario.id);
            let user_updated = usuario;
            user_updated.cuentaActiva = 1;
            this.usuarios[itemIndex] = user_updated;
        })
      }
    }

  }
}
