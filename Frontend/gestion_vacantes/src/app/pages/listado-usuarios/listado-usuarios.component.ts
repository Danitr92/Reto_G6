import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {

  arrUsuarios: Usuario[] = [];

  usuarioService = inject(UsuarioService);

  async ngOnInit(): Promise<void> {
    try {
      this.arrUsuarios = await this.usuarioService.getAllWithPromises();
      console.log('arrUsuarios', this.arrUsuarios);
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }
}
