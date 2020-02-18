import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { environment as env } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<User[]>(`${env.url}/usuarios`);
  }

  crearUsuario(user: User){
    return this.http.post<User>(`${env.url}/usuarios`, user);
  }

}
