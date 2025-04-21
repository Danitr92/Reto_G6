import { Component, inject } from '@angular/core';
import { Empresa } from '../../interfaces/empresa';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-listado-empresas',
  imports: [],
  templateUrl: './listado-empresas.component.html',
  styleUrl: './listado-empresas.component.css'
})
export class ListadoEmpresasComponent {

  arrEmpresas: Empresa[] = [];
  empresaService = inject(EmpresaService);

  async ngOnInit(): Promise<void> {
    try {
      this.arrEmpresas = await this.empresaService.getAllWithPromises();
      console.log('arrEmpresas:', this.arrEmpresas);
    }
    catch (err) {
      console.log('Error al conectar a la API: '+err)
    }
    
  }
}
