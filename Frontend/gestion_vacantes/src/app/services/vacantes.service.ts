import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Vacante } from '../interfaces/vacante';
import { Categoria } from '../interfaces/categoria';
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class VacantesService {

  
  httpClient = inject(HttpClient);
  private baseUrl : string = 'http://localhost:8086/vacantes';

  constructor() { }

  getAllWithPromises(): Promise<any> {
    return lastValueFrom(this.httpClient.get<{ results: Vacante[] }>(this.baseUrl));
  }

  getById(idVacante: number): Promise<Vacante> {
    return lastValueFrom(this.httpClient.get<Vacante>(`${this.baseUrl}/${idVacante}`));
  }
  
  delete(idVacante: number): Promise<Vacante> {
    return lastValueFrom(this.httpClient.delete<Vacante>(`${this.baseUrl}/${idVacante}`));
  }

  insert(vacante: Vacante): Promise<Vacante>{
    return lastValueFrom(this.httpClient.post<Vacante>(this.baseUrl, vacante));
  }

  update(idVacante: number, vacante: Vacante): Promise<Vacante> {
    return lastValueFrom(this.httpClient.put<Vacante>(this.baseUrl + "/" +vacante.idVacante, vacante));
  }

  getCategorias(): Promise<Categoria[]> {
    return lastValueFrom(this.httpClient.get<Categoria[]>('http://localhost:8086/categorias'));
  }
  
  getEmpresas(): Promise<Empresa[]> {
    return lastValueFrom(this.httpClient.get<Empresa[]>('http://localhost:8086/empresas'));
  }

}
