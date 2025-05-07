import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VacantesService } from '../../services/vacantes.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { SolicitudService } from '../../services/solicitude.service';
import { formatDate } from '@angular/common';
import { Usuario } from '../../interfaces/usuario';
import { Solicitud } from '../../interfaces/solicitud';
import { Vacante } from '../../interfaces/vacante';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink, CommonModule],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  solicitudService = inject(SolicitudService);
  vacService = inject(VacantesService);
  authService = inject(AuthService);
  router = inject(Router);

  @Input() idVacante: number;
  @Input() parent: string;

  role: string = '';


  constructor() {
    this.idVacante = 0;
    this.parent = "";

    const userRole = this.authService.getUserRole();
    this.role = userRole ? userRole : '';
  }

  async cancelarVacante(idVacante: number) {
    const { isConfirmed } = await Swal.fire({
      title: '¿Está seguro de que quiere cancelar esta vacante?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No',
    });
  
    if (isConfirmed) {
      try {
        const vacante = await this.vacService.getById(idVacante);
        vacante.estatus = "CANCELADA";
        const response = await this.vacService.update(idVacante, vacante);
  
        Swal.fire({
          icon: 'success',
          title: `Vacante de ${response.nombre} cancelada correctamente`,
          showConfirmButton: true,
          timer: 3000
        });
  
        if (this.parent === 'view') {
          this.router.navigate(['/vacantes']);
        } else if (this.parent === 'card') {
          setTimeout(() => location.reload(), 3000);
        }
  
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error al cancelar vacante',
          text: 'Intenta nuevamente más tarde.',
        });
      }
    }
  }


  
  async inscribirse() {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      Swal.fire('Error', 'Debes iniciar sesión para inscribirte.', 'error');
      return;
    }
  
    const yaExiste = await this.solicitudService.existeSolicitud(this.idVacante, currentUser.email);
  
    if (yaExiste) {
      Swal.fire('Ya inscrito', 'Ya estás inscrito en esta vacante.', 'info');
      return;
    }
  
    const { isConfirmed } = await Swal.fire({
      title: '¿Quieres inscribirte en esta vacante?',
      text: 'Tu currículum será enviado a la empresa.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, inscribirme',
      cancelButtonText: 'No'
    });
  
    if (isConfirmed) {
      const solicitud: Solicitud = {
        fecha: new Date().toISOString().split('T')[0],
        archivo: 'documento.pdf', // Puedes cambiar esto si subes un archivo real
        comentarios: '',
        estado: false,
        curriculum: 'cv_cliente.pdf',
        vacante: { idVacante: this.idVacante } as Vacante,
        usuario: { email: currentUser.email } as Usuario // Aquí es donde se corrige
      };
  
      try {
        await this.solicitudService.crearSolicitud(solicitud);
        Swal.fire('Éxito', 'Te has inscrito correctamente.', 'success');
      } catch (err) {
        Swal.fire('Error', 'Ocurrió un error al inscribirte.', 'error');
      }
    }
  }
  


  
}
