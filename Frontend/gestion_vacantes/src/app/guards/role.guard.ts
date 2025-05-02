
import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['role'];
  const userRole = authService.getUserRole();

  if (userRole === expectedRole) {
    return true;
  }
  
  // Redirigir al dashboard según su rol si intenta acceder a ruta no permitida
  switch(userRole) {
    case 'ADMIN': router.navigate(['/admin/empresas']); break;
    case 'EMPRESA': router.navigate(['/empresa/vacantes']); break;
    case 'CLIENTE': router.navigate(['/cliente/vacantes']); break;
    default: router.navigate(['/login']);
  }
  
  return false;
};