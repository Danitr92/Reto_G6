import { Component, inject, OnInit } from '@angular/core';
import { SolicitudService } from '../../services/solicitude.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Solicitud } from '../../interfaces/solicitud';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inscripciones',
  imports: [CommonModule],
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {
  private solicitudService = inject(SolicitudService);
  private authService = inject(AuthService);
  private router = inject(Router);

  inscripciones: Solicitud[] = [];
  idVacante: number = 1;  // Este valor debería ser dinámico según la vacante de la empresa

  constructor() {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser || currentUser.rol !== 'EMPRESA') {
      this.router.navigate(['/login']); // Redirigir si no es una empresa
    }
  }

  ngOnInit(): void {
    this.loadInscripciones();
  }

  // Cargar las inscripciones de la vacante
  loadInscripciones() {
    this.solicitudService.getById(this.idVacante).subscribe({
      next: (solicitud: Solicitud) => {
        // Aquí filtras la solicitud basada en el idVacante
        if (solicitud.vacante.idVacante === this.idVacante) {
          this.inscripciones.push(solicitud); // Aquí podrías llenar un array si necesitas múltiples
        }
      },
      error: (err) => {
        console.error('Error al cargar la solicitud', err);
      }
    });
  }
}
