import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacantesService } from '../../services/vacantes.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vacante-form',
  imports: [],
  templateUrl: './vacante-form.component.html',
  styleUrl: './vacante-form.component.css'
})
export class VacanteFormComponent {

  router = inject(Router);
  vacService = inject(VacantesService);
  activatedRoute = inject(ActivatedRoute);

  vacanteForm: FormGroup;
  tipo: string;

  constructor() {
    this.tipo = "Nuevo";
  }

}
