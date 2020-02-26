import { User } from './User';

export class Cartelera {
    id: number;
    titulo: string;
    descripcion: string;
    tipoCartelera: string;
    asignatura?: string;
    alta: Date;
    autor?: User;
}