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
  tipo: string;

  constructor() {
    this.tipo = "Nuevo";

    this.vacanteForm = new FormGroup({
      idVacante: new FormControl(null),
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s.,'-]+$/)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
      fecha: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required, Validators.min(0)]),
      estatus: new FormControl('', [Validators.required, Validators.pattern(/^(CREADA|CUBIERTA|CANCELADA)$/)]),
      destacado: new FormControl(false),
      imagen: new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)]),
      detalles: new FormControl('', [Validators.required, Validators.minLength(10)]),
      categoria: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.vacService.getCategorias().then(data => this.categorias = data);
    this.vacService.getEmpresas().then(data => this.empresas = data);

    this.activatedRoute.params.subscribe(async (params: any) => {
      if (params.idVacante) {
        this.tipo = "Actualizar";
        const userResponse: Vacante = await this.vacService.getById(params.idVacante);

        this.vacanteForm.setValue({
          idVacante: userResponse.idVacante,
          nombre: userResponse.nombre,
          descripcion: userResponse.descripcion,
          fecha: userResponse.fecha,
          salario: userResponse.salario,
          estatus: userResponse.estatus,
          destacado: userResponse.destacado,
          imagen: userResponse.imagen,
          detalles: userResponse.detalles,
          categoria: userResponse.categoria.idCategoria,
          empresa: userResponse.empresa.idEmpresa
        });
      }
    });
  }

  getDataForm() {
    if (this.vacanteForm.invalid) return;

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
            title: `Vacante de ${datosVacante.nombre} actualizada correctamente`,
            showConfirmButton: true,
            timer: 3000
          });
          this.router.navigate(['/vacantes']);
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `Error al actualizar la vacante de ${datosVacante.nombre}`,
            showConfirmButton: true
          });
        });
    } else {
      this.vacService.insert(datosVacante)
        .then((vacanteCreada) => {
          Swal.fire({
            icon: 'success',
            title: `Vacante de ${vacanteCreada.nombre} creada correctamente`,
            showConfirmButton: true,
            timer: 3000
          });
          this.router.navigate(['/vacantes']);
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error al crear la vacante',
            showConfirmButton: true
          });
        });
    }
  }
}
