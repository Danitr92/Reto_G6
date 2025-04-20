import { Component, inject } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { Empresa } from '../../interfaces/empresa';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  arrEmpresas: Empresa[] = [];
  arrUsuarios: Usuario[] = [];

  usuarioService = inject(UsuarioService);
  empresaService = inject(EmpresaService);

  async ngOnInit(): Promise<void> {
    try {
      this.arrEmpresas = await this.empresaService.getAllWithPromises();
      this.arrUsuarios = await this.usuarioService.getAllWithPromises();
      console.log('arrEmpresas:', this.arrEmpresas, 'arrUsuarios', this.arrUsuarios);
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }

}
