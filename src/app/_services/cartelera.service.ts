import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

import { Cartelera } from '../_models/Cartelera';
import { Observable } from 'rxjs/internal/Observable';
import { User, Publicacion } from '../_models';

@Injectable({ providedIn: 'root' })
export class CarteleraService {
    
    constructor(private http: HttpClient) { }

    getCartelerasPublicas() {
        return this.http.get<Cartelera[]>(`${env.url}/carteleras_publicas`);
    }

    getTiposCartelera(): Observable<string[]> {
        return this.http.get<string[]>(`${env.url}/tipos_cartelera`);
    }

    crearCartelera(cartelera: Cartelera){
        return this.http.post<Cartelera>(`${env.url}/carteleras`, cartelera);
    }

    getCartelera(id: number):Observable<Cartelera>{
        return this.http.get<any>(`${env.url}/carteleras/`+id);
    }

    /** -------- SUSCRIPTORES ------------------------------------------- */
    suscribirUsuario(id: number, alumno: User){
        return this.http.post<User[]>(`${env.url}/carteleras/`+id+`/interesados`, alumno);
    }

    getSuscriptores(id: number){
        return this.http.get<User[]>(`${env.url}/carteleras/`+id+`/interesados`);
    }
    
    /** -------- PUBLICACIONES ------------------------------------------- */
    agregarPublicacion(id: number, publicacion: Publicacion){
        return this.http.post<Publicacion[]>(`${env.url}/carteleras/`+id+`/publicaciones`, publicacion);
    }

    getPublicacion(id: number){
        return this.http.get<Publicacion[]>(`${env.url}/carteleras/`+id+`/publicaciones`);
    }
}