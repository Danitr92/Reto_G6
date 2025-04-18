package gestion.service;

import java.util.List;

import gestion.entity.Categoria;

public interface CategoriaService {
    List<Categoria> findAll();
    Categoria findById(Integer id);
    Categoria save(Categoria categoria);
    Categoria update(Categoria categoria);
    void delete(Integer id);
}
