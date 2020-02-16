import { User } from './User';
import { Cartelera } from './Cartelera';

export class Publicacion {
    id: number;
    titulo: string;
    contenido: string;
    autor: User;
}