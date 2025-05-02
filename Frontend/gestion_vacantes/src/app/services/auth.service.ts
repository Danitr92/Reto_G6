import { EventEmitter, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:8086/usuarios';
  public authChanged = new EventEmitter<void>();

  login(email: string, password: string) {


    return this.http.get<Usuario>(`${this.apiUrl}/${email}`).pipe(
      tap(usuario => {
        
        if (usuario && usuario.password === password && usuario.enabled === 1) {
          localStorage.setItem('currentUser', JSON.stringify(usuario));
          this.authChanged.emit(); // Avisa al nabvar que hubo cambios
          console.log('Usuario logueado:', usuario);
          // Redirigir según rol
          switch(usuario.rol) {
            case 'ADMIN': this.router.navigate(['/admin/empresas']); break;
            case 'EMPRESA': this.router.navigate(['/empresa/vacantes']); break;
            case 'CLIENTE': this.router.navigate(['/cliente/vacantes']); break;
          }
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    this.authChanged.emit();  // Avisa al nabvar que hubo cambios
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): Usuario | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  getUserRole(): string | null {
    const user = this.getCurrentUser();
    return user ? user.rol : null;
  }


  
}
