import { Cartelera } from './Cartelera';

export class User {
    id: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    perfil: string;
    token?: string;
    carteleras?: number[];
    preferidas?: number[];
}