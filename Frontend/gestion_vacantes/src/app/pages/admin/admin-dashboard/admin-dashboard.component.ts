import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../interfaces/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  usuario: Usuario | null = null;
  
    constructor(private authService: AuthService) {}
  
    ngOnInit(): void {
      this.usuario = this.authService.getCurrentUser();
    }

}
