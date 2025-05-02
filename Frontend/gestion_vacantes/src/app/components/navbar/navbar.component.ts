import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnDestroy {
  rol: string | null = null;
  private authSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.updateRole(); // Carga inicial
    
    // Listener que reacciona a cambios de autenticación
    this.authSubscription = this.authService.authChanged.subscribe(() => {
      this.updateRole();
    });
  }

  private updateRole(): void {
    this.rol = this.authService.getUserRole();
  }

  logout(): void {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe(); // Importante para evitar memory leaks
  }
}
