package gestion.dto;

import lombok.Data;

import java.time.LocalDate;

import gestion.entity.Usuario.Rol;

@Data
public class UsuarioDto {
    private String email;
    private String nombre;
    private String apellidos;
    private Rol rol;
    private LocalDate fechaRegistro;
    private int enabled;
    
}
