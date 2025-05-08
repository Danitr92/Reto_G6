import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuario: Usuario = {
    email: '',
    nombre: '',
    apellidos: '',
    password: '',
    enabled: 1,
    fechaRegistro: new Date().toISOString().split('T')[0],
    rol: 'CLIENTE'
  };

  constructor(private usuarioService: UsuarioService) {}

  async registrar() {
    try {
      const nuevoUsuario = await this.usuarioService.crearUsuario(this.usuario);
      Swal.fire('¡Registro exitoso!', 'Usuario creado correctamente.', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo registrar el usuario.', 'error');
      console.error(error);
    }
  }
}
