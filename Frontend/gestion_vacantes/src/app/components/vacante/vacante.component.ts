import { Component, Input } from '@angular/core';
import { Vacante } from '../../interfaces/vacante';
import { BotoneraComponent } from '../botonera/botonera.component';

@Component({
  selector: 'app-vacante',
  imports: [BotoneraComponent],
  templateUrl: './vacante.component.html',
  styleUrl: './vacante.component.css'
})
export class VacanteComponent {

  @Input() miVacante!: Vacante;
  
}
