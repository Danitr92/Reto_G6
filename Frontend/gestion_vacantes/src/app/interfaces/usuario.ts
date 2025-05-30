export interface Usuario {
  email: string,
  nombre: string,
  apellidos: string,
  password: string,
  enabled: number,
  fechaRegistro: string,
  rol: 'ADMIN' | 'EMPRESA' | 'CLIENTE';
}
