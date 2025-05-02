import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'http://localhost:8086/solicitudes';

  constructor() { }

}


// FALTA IMPLEMENTAR, EL INTERFACE TAMBIEN