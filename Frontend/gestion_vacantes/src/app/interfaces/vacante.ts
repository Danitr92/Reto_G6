import { Categoria } from "./categoria";
import { Empresa } from "./empresa";

export interface Vacante {
  idVacante: number,
  nombre: string,
  descripcion: string,
  fecha: string,
  salario: number,
  estatus: string,
  destacado: boolean,
  imagen: string,
  detalles: string,
  categoria: Categoria,
  empresa: Empresa
}
