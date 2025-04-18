package gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gestion.entity.Solicitud;

public interface SolicitudRepository extends JpaRepository<Solicitud, Integer> {
}
