import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "login"},
    { path: "listado", component: ListadoComponent},
    { path: "login", component: LoginComponent},
   /**  { path: "nuevo/user", component: UserFormComponent },
    { path: "user/:_id", component: UserViewComponent},
    { path: "actualizar/user/:_id", component: UserFormComponent}, */
    {path: "**", redirectTo: "login"}
];
