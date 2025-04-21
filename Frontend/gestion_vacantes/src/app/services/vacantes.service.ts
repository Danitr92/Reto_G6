import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Vacante } from '../interfaces/vacante';

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
}
