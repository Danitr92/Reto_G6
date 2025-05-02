package gestion.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @Column(length = 45)
    private String email;

    @Column(nullable = false, length = 45)
    private String nombre;

    @Column(nullable = false, length = 100)
    private String apellidos;

    @Column(nullable = false, length = 100)
    private String password;

    @Column(nullable = false)
    private int enabled = 1;

    @Column(name = "fecha_registro")
    private LocalDate fechaRegistro;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 15)
    private Rol rol;

    public enum Rol {
        EMPRESA, ADMIN, CLIENTE
    }
}
