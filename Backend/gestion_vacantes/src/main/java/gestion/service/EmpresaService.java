package gestion.service;

import java.util.List;

import gestion.entity.Empresa;

public interface EmpresaService {
    List<Empresa> findAll();
    Empresa findById(Integer id);
    Empresa save(Empresa empresa);
    Empresa update(Empresa empresa);
    void delete(Integer id);
}
