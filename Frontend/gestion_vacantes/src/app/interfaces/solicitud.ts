import { Vacante } from './vacante';
import { Usuario } from './usuario';

export interface Solicitud {
  idSolicitud?: number;
  fecha: string;
  archivo: string;
  comentarios: string;
  estado: boolean;
  curriculum: string;
  vacante: Vacante;
  usuario: Usuario;
}