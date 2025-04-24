import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VacantesService } from '../../services/vacantes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  vacService = inject(VacantesService);
  router = inject(Router);

  @Input() idVacante: number;
  @Input() parent: string;


  constructor() {
    this.idVacante = 0;
    this.parent = "";
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
  
}
