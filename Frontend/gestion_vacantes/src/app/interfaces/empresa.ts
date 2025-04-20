import { Usuario } from "./usuario";

export interface Empresa {
  idEmpresa: number,
  cif: string,
  nombreEmpresa: string,
  direccionFiscal: string,
  pais: string,
  usuario: Usuario,
}
