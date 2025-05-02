import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  // Público
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) 
  },

  // Listados (Admin)
  {
    path: 'admin/dashboard',
    loadComponent: () => import('./pages/admin/admin-dashboard/admin-dashboard.component')
      .then(m => m.AdminDashboardComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'ADMON' }
  },
  
  { 
    path: 'listado/empresas', 
    loadComponent: () => import('./pages/listado-empresas/listado-empresas.component').then(m => m.ListadoEmpresasComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'ADMON' } 
  },
  { 
    path: 'listado/usuarios', 
    loadComponent: () => import('./pages/listado-usuarios/listado-usuarios.component').then(m => m.ListadoUsuariosComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'ADMON' } 
  },

  // Vacantes (Compartido)
  { 
    path: 'vacantes', 
    loadComponent: () => import('./pages/vacantes-list/vacantes-list.component').then(m => m.VacantesListComponent),
    canActivate: [authGuard] 
  },
  { 
    path: 'vacante/:idVacante', 
    loadComponent: () => import('./pages/vacante-detalle/vacante-detalle.component').then(m => m.VacanteDetalleComponent),
    canActivate: [authGuard] 
  },

  // Formularios (Empresa)
  { 
    path: 'editar/vacante/:idVacante', 
    loadComponent: () => import('./pages/vacante-form/vacante-form.component').then(m => m.VacanteFormComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'EMPRESA' } 
  },
  { 
    path: 'nueva/vacante', 
    loadComponent: () => import('./pages/vacante-form/vacante-form.component').then(m => m.VacanteFormComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'EMPRESA' } 
  },

  // Redirección para rutas no encontradas
  { path: '**', redirectTo: 'login' }
];