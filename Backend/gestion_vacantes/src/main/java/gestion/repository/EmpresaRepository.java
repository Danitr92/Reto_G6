package gestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gestion.entity.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {
	
    boolean existsByCif(String cif);
    
}
