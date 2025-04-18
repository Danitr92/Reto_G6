package gestion.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import gestion.entity.Solicitud;
import gestion.service.SolicitudService;

import java.util.List;

@RestController
@RequestMapping("/solicitudes")
@CrossOrigin(origins = "*")
public class SolicitudController {

    @Autowired
    private SolicitudService solicitudService;

    @GetMapping
    public List<Solicitud> listarSolicitudes() {
        return solicitudService.findAll();
    }

    @GetMapping("/{id}")
    public Solicitud obtenerSolicitud(@PathVariable Integer id) {
        return solicitudService.findById(id);
    }

    @PostMapping
    public Solicitud crearSolicitud(@RequestBody Solicitud solicitud) {
        return solicitudService.save(solicitud);
    }

    @PutMapping("/{id}")
    public Solicitud actualizarSolicitud(@PathVariable Integer id, @RequestBody Solicitud solicitud) {
        solicitud.setIdSolicitud(id);
        return solicitudService.update(solicitud);
    }

    @DeleteMapping("/{id}")
    public void eliminarSolicitud(@PathVariable Integer id) {
        solicitudService.delete(id);
    }
}
