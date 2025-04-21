import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VacantesService } from '../../services/vacantes.service';

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

}
