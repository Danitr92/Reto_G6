import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Empresa } from '../../../interfaces/empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresa-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './empresa-dashboard.component.html',
  styleUrl: './empresa-dashboard.component.css'
})
export class EmpresaDashboardComponent {

  empresa?: Empresa;

  constructor(
    private empresaService: EmpresaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.empresaService.getByUsuarioEmail(currentUser.email).subscribe(
        (data) => this.empresa = data,
        (error) => console.error('Error al obtener empresa:', error)
      );
    }
  }

}


