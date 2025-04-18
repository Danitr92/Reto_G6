package gestion.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "solicitudes", uniqueConstraints = @UniqueConstraint(columnNames = {"id_vacante", "email"}))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Solicitud {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_solicitud")
    private Integer idSolicitud;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(nullable = false, length = 250)
    private String archivo;

    @Column(length = 2000)
    private String comentarios;

    @Column(nullable = false)
    private boolean estado; // 0 = presentada, 1 = adjudicada

    @Column(length = 45)
    private String curriculum;

    @ManyToOne
    @JoinColumn(name = "id_vacante", nullable = false)
    private Vacante vacante;

    @ManyToOne
    @JoinColumn(name = "email", nullable = false)
    private Usuario usuario;
}
