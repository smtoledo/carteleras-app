import { User } from './User';
import { Cartelera } from './Cartelera';
import { Comentario } from './Comentario';

export class Publicacion {
    id: number;
    titulo: string;
    contenido: string;
    comentarios?: Comentario[];
}