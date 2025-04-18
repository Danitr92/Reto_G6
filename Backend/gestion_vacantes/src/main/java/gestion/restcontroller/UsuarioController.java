package gestion.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import gestion.entity.Usuario;
import gestion.service.UsuarioService;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioService.findAll();
    }

    @GetMapping("/{email}")
    public Usuario obtenerUsuario(@PathVariable String email) {
        return usuarioService.findByEmail(email);
    }

    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    @PutMapping("/{email}")
    public Usuario actualizarUsuario(@PathVariable String email, @RequestBody Usuario usuario) {
        usuario.setEmail(email);
        return usuarioService.update(usuario);
    }

    @DeleteMapping("/{email}")
    public void eliminarUsuario(@PathVariable String email) {
        usuarioService.delete(email);
    }
}
