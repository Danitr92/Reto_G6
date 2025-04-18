package gestion.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "vacantes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vacante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_vacante")
    private Integer idVacante;

    @Column(nullable = false, length = 200)
    private String nombre;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String descripcion;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(nullable = false)
    private double salario;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private Estatus estatus;

    @Column(nullable = false)
    private boolean destacado;

    @Column(nullable = false, length = 250)
    private String imagen;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String detalles;

    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "id_empresa", nullable = false)
    private Empresa empresa;

    public enum Estatus {
        CREADA, CUBIERTA, CANCELADA
    }
}
