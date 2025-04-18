package gestion.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import gestion.entity.Vacante;
import gestion.service.VacanteService;

import java.util.List;

@RestController
@RequestMapping("/vacantes")
@CrossOrigin(origins = "*")
public class VacanteController {

    @Autowired
    private VacanteService vacanteService;

    @GetMapping
    public List<Vacante> listarVacantes() {
        return vacanteService.findAll();
    }

    @GetMapping("/{id}")
    public Vacante obtenerVacante(@PathVariable Integer id) {
        return vacanteService.findById(id);
    }

    @PostMapping
    public Vacante crearVacante(@RequestBody Vacante vacante) {
        return vacanteService.save(vacante);
    }

    @PutMapping("/{id}")
    public Vacante actualizarVacante(@PathVariable Integer id, @RequestBody Vacante vacante) {
        vacante.setIdVacante(id);
        return vacanteService.update(vacante);
    }

    @DeleteMapping("/{id}")
    public void eliminarVacante(@PathVariable Integer id) {
        vacanteService.delete(id);
    }
}
