package gestion.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "empresas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_empresa")
    private Integer idEmpresa;

    @Column(nullable = false, unique = true, length = 10)
    private String cif;

    @Column(name = "nombre_empresa", nullable = false, length = 100)
    private String nombreEmpresa;

    @Column(name = "direccion_fiscal", length = 100)
    private String direccionFiscal;

    @Column(length = 45)
    private String pais;

    @ManyToOne
    @JoinColumn(name = "email", referencedColumnName = "email")
    private Usuario usuario;
}
