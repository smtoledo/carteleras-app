import { User } from './User';
import { Publicacion } from './Publicacion';

export class Comentario {
    id: number;
    contenido: string;
    fecha: Date;
    autor: User;
    publicacion: Publicacion;
}