import { Component, inject } from '@angular/core';
import { Vacante } from '../../interfaces/vacante';
import { VacantesService } from '../../services/vacantes.service';
import { VacanteComponent } from "../../components/vacante/vacante.component";

@Component({
  selector: 'app-vacantes-list',
  imports: [VacanteComponent],
  templateUrl: './vacantes-list.component.html',
  styleUrl: './vacantes-list.component.css'
})
export class VacantesListComponent {

  arrVacantes: Vacante[] = []
  vacService = inject(VacantesService);

  async ngOnInit(): Promise<void> {
    try {
      this.arrVacantes = await this.vacService.getAllWithPromises();
      console.log('arrVacantes:', this.arrVacantes);
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }

}
