package gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gestion.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    boolean existsByEmail(String email);
}
