import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { VacantesService } from '../../services/vacantes.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vacante } from '../../interfaces/vacante';
import Swal from 'sweetalert2';
import { Categoria } from '../../interfaces/categoria';
import { Empresa } from '../../interfaces/empresa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacante-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './vacante-form.component.html',
  styleUrl: './vacante-form.component.css'
})
export class VacanteFormComponent {
  router = inject(Router);
  vacService = inject(VacantesService);
  activatedRoute = inject(ActivatedRoute);

  categorias: Categoria[] = [];
  empresas: Empresa[] = [];
  vacanteForm: FormGroup;
  tipo: string = "Nuevo";

  constructor() {
    this.vacanteForm = new FormGroup({
      idVacante: new FormControl(null),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,'-]+$/)
      ]),
      descripcion: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      fecha: new FormControl('', [Validators.required]),
      salario: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      estatus: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(CREADA|CUBIERTA|CANCELADA)$/)
      ]),
      destacado: new FormControl(false),
      imagen: new FormControl('', [Validators.required]),
      detalles: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      categoria: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required])
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.categorias = await this.vacService.getCategorias();
      this.empresas = await this.vacService.getEmpresas();

      this.activatedRoute.params.subscribe(async (params: any) => {
        if (params.idVacante) {
          this.tipo = "Actualizar";
          const vacante = await this.vacService.getById(params.idVacante);
          this.vacanteForm.patchValue({
            ...vacante,
            categoria: vacante.categoria.idCategoria,
            empresa: vacante.empresa.idEmpresa
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error', 'No se pudieron cargar los datos', 'error');
    }
  }

  getDataForm() {
    if (this.vacanteForm.invalid) {
      this.vacanteForm.markAllAsTouched();
      Swal.fire('Error', 'Por favor complete todos los campos requeridos', 'error');
      return;
    }

    const formValue = this.vacanteForm.value;
    const datosVacante: Vacante = {
      ...formValue,
      categoria: { idCategoria: formValue.categoria } as Categoria,
      empresa: { idEmpresa: formValue.empresa } as Empresa
    };

    if (datosVacante.idVacante) {
      this.vacService.update(datosVacante.idVacante, datosVacante)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: `Vacante actualizada`,
            timer: 2000
          });
          this.router.navigate(['/vacantes']);
        })
        .catch(err => {
          Swal.fire('Error', 'No se pudo actualizar la vacante', 'error');
        });
    } else {
      this.vacService.insert(datosVacante)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: `Vacante creada`,
            timer: 2000
          });
          this.router.navigate(['/vacantes']);
        })
        .catch(err => {
          Swal.fire('Error', 'No se pudo crear la vacante', 'error');
        });
    }
  }
}