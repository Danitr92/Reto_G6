package gestion.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import gestion.entity.Empresa;
import gestion.service.EmpresaService;

import java.util.List;

@RestController
@RequestMapping("/empresas")
@CrossOrigin(origins = "*")
public class EmpresaController {

    @Autowired
    private EmpresaService empresaService;

    @GetMapping
    public List<Empresa> listarEmpresas() {
        return empresaService.findAll();
    }

    @GetMapping("/{id}")
    public Empresa obtenerEmpresa(@PathVariable Integer id) {
        return empresaService.findById(id);
    }

    @PostMapping
    public Empresa crearEmpresa(@RequestBody Empresa empresa) {
        return empresaService.save(empresa);
    }

    @PutMapping("/{id}")
    public Empresa actualizarEmpresa(@PathVariable Integer id, @RequestBody Empresa empresa) {
        empresa.setIdEmpresa(id);
        return empresaService.update(empresa);
    }

    @DeleteMapping("/{id}")
    public void eliminarEmpresa(@PathVariable Integer id) {
        empresaService.delete(id);
    }
}
