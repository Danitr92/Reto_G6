import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-dashboard',
  imports: [CommonModule],
  templateUrl: './usuario-dashboard.component.html',
  styleUrl: './usuario-dashboard.component.css'
})
export class UsuarioDashboardComponent {


  usuario: Usuario | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuario = this.authService.getCurrentUser();
  }


}
