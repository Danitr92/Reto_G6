import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';
import { VacantesListComponent } from './pages/vacantes-list/vacantes-list.component';
import { VacanteDetalleComponent } from './pages/vacante-detalle/vacante-detalle.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "login"},
    { path: "listado", component: ListadoComponent},
    { path: "login", component: LoginComponent},
    { path: "vacantes", component: VacantesListComponent},
   /** { path: "editar/vacante/:idVacante", component: VacanteFormComponent},
    { path: "nueva/vacante/:idVacante", component: VacanteFormComponent},*/
    { path: "vacante/:idVacante", component: VacanteDetalleComponent},
    {path: "**", redirectTo: "login"}
];
