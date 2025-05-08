package gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gestion.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    @Query("SELECT u FROM Usuario u WHERE u.email = :email")
    Usuario findByEmail(@Param("email") String email);
    
    boolean existsByEmail(String email);

}	