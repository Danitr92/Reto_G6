package gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gestion.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
