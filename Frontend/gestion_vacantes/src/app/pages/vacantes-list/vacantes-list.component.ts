import { Component, inject } from '@angular/core';
import { Vacante } from '../../interfaces/vacante';
import { VacantesService } from '../../services/vacantes.service';
import { VacanteComponent } from "../../components/vacante/vacante.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacantes-list',
  imports: [VacanteComponent, RouterLink],
  templateUrl: './vacantes-list.component.html',
  styleUrl: './vacantes-list.component.css'
})
export class VacantesListComponent {

  arrVacantes: Vacante[] = []
  vacService = inject(VacantesService);

  async ngOnInit(): Promise<void> {
    try {
      const todasLasVacantes = await this.vacService.getAllWithPromises();
      // Filtrar vacantes activas (las no canceladas)
      this.arrVacantes = todasLasVacantes.filter((v: Vacante) => v.estatus !== 'CANCELADA');
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }

}
