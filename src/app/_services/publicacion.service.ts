import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publicacion, Comentario } from '../_models';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }

  getPublicaciones(id: number) {
    return this.http.get<Publicacion[]>(`${env.url}/carteleras/`+id+`/publicaciones`);
  }

  getPublicacion(cartelera: number, publicacion: number) {
    return this.http.get<Publicacion>(`${env.url}/carteleras/`+cartelera+`/publicaciones/`+publicacion);
  }

  postComentario(cartelera: number, publicacion: number, comentario: Comentario){
    return this.http.post<Comentario[]>(`${env.url}/carteleras/`+cartelera+`/publicaciones/`
      +publicacion+`/comentarios`, comentario);
  }

  getComentarios(cartelera: number, publicacion: number){
    return this.http.get<Comentario[]>(`${env.url}/carteleras/`+cartelera+`/publicaciones/`
    +publicacion+`/comentarios`);
  }
}
