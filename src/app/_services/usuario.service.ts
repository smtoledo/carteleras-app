import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cartelera, User } from '../_models';
import { environment as env } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  /** ABM Usuarios */
  getUsuarios() {
    return this.http.get<User[]>(`${env.url}/usuarios`);
  }

  getUsuario(id: string) {
    return this.http.get<User>(`${env.url}/usuarios/`+id);
  }

  crearUsuario(user: User){
    debugger;
    return this.http.post<User>(`${env.url}/usuarios`, user);
  }

  actualizarUsuario(user: User){
    return this.http.put<User>(`${env.url}/usuarios`, user);
  }

  /** ALUMNOS - suscripcion a carteleras */

  suscribirCartelera(cartelera: Cartelera, username:String){
      return this.http.put<User>(`${env.url}/usuarios/suscribe/`+cartelera.id+`/`+username, {});
  }

  desuscribirCartelera(cartelera: Cartelera, username:String){
      return this.http.put<User>(`${env.url}/usuarios/unsuscribe/`+cartelera.id+`/`+username, {});
  }

  recuperarSuscriptores(cartelera_id: string){
    debugger;
    return this.http.get<User[]>(`${env.url}/suscriptores/`+cartelera_id);
  }

  actualizarCuenta(user_id: number, value: number){
    return this.http.put<User>(`${env.url}/usuarios/updateCuenta/`+user_id+`/`+value, {});
}

}
