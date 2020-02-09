import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

import { Cartelera } from '../_models/Cartelera';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class CarteleraService {
    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Cartelera[]>(`${env.url}/carteleras`);
    }

    getTiposCartelera(): Observable<string[]> {
        return this.http.get<string[]>(`${env.url}/tipos_cartelera`);
    }

    crearCartelera(cartelera: Cartelera){
        return this.http.post<Cartelera>(`${env.url}/carteleras`, cartelera);
    }

}