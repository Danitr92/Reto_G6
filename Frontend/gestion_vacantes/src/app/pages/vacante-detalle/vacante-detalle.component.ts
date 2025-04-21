import { Component, inject } from '@angular/core';
import { VacantesService } from '../../services/vacantes.service';
import { ActivatedRoute } from '@angular/router';
import { Vacante } from '../../interfaces/vacante';
import { BotoneraComponent } from '../../components/botonera/botonera.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacante-detalle',
  imports: [BotoneraComponent, CommonModule],
  templateUrl: './vacante-detalle.component.html',
  styleUrl: './vacante-detalle.component.css'
})
export class VacanteDetalleComponent {

  vacService = inject(VacantesService);
  activatedRoute = inject(ActivatedRoute);

  miVacante!: Vacante;

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(async (params: any) => {
      let idVacante: number = params.idVacante as number;

      try {
        this.miVacante = await this.vacService.getById(idVacante);
        console.log("Vacante recibida:", this.miVacante);
      } catch (err) {
        console.log("Error al llamar a la API: " + err);
      }
    });
  }

}
