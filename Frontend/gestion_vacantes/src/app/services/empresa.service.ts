import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'http://localhost:8086/empresas';

  constructor() { }

  getAllWithPromises(): Promise<any> {
    return lastValueFrom(this.httpClient.get<{ results: Empresa[] }>(this.baseUrl));
  }

  getByUsuarioEmail(email: string) {
    return this.httpClient.get<Empresa>(`${this.baseUrl}/usuario/${email}`);
  }
  

}
