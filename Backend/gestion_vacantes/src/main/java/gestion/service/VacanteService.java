package gestion.service;

import java.util.List;

import gestion.entity.Vacante;

public interface VacanteService {
    List<Vacante> findAll();
    Vacante findById(Integer id);
    Vacante save(Vacante vacante);
    Vacante update(Vacante vacante);
    void delete(Integer id);
}
