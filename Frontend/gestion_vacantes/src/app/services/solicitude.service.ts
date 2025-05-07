import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Solicitud } from '../interfaces/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'http://localhost:8086/solicitudes';

  crearSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.httpClient.post<Solicitud>(this.baseUrl, solicitud);
  }

  existeSolicitud(idVacante: number, email: string): Promise<boolean> {
    const params = new HttpParams()
      .set('idVacante', idVacante)
      .set('email', email);

    return lastValueFrom(this.httpClient.get<boolean>(`${this.baseUrl}/existe`, { params }));
  }

  getById(id: number): Observable<Solicitud> {
    return this.httpClient.get<Solicitud>(`${this.baseUrl}/${id}`);
  }

  getByVacante(idVacante: number): Observable<Solicitud[]> {
    return this.httpClient.get<Solicitud[]>(`${this.baseUrl}/${idVacante}`);
  }

}

