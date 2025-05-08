package gestion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.entity.Empresa;
import gestion.repository.EmpresaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmpresaServiceImpl implements EmpresaService {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public List<Empresa> findAll() {
        return empresaRepository.findAll();
    }

    @Override
    public Empresa findById(Integer id) {
        return empresaRepository.findById(id).orElse(null);
    }

    @Override
    public Empresa save(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    @Override
    public Empresa update(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    @Override
    public void delete(Integer id) {
        empresaRepository.deleteById(id);
    }
    
    @Override
    public Empresa findByUsuarioEmail(String email) {
        return empresaRepository.findByUsuarioEmail(email);
    }
}
