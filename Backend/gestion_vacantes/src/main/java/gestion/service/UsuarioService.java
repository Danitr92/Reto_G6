package gestion.service;

import java.util.List;

import gestion.entity.Usuario;

public interface UsuarioService {
    List<Usuario> findAll();
    Usuario findByEmail(String email);
    Usuario save(Usuario usuario);
    Usuario update(Usuario usuario);
    void delete(String email);
}

