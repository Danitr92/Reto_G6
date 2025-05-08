import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'http://localhost:8086/usuarios';

  constructor() { }

  getAllWithPromises(): Promise<any> {
    return lastValueFrom(this.httpClient.get<{ results: Usuario[] }>(this.baseUrl));
  }

  crearUsuario(usuario: Usuario): Promise<Usuario> {
    return lastValueFrom(this.httpClient.post<Usuario>(this.baseUrl, usuario));
  }

}
