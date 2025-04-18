package gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gestion.entity.Vacante;

public interface VacanteRepository extends JpaRepository<Vacante, Integer> {
}
