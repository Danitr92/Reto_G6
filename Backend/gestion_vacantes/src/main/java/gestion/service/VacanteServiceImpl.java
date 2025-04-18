package gestion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gestion.entity.Vacante;
import gestion.repository.VacanteRepository;

import java.util.List;

@Service
public class VacanteServiceImpl implements VacanteService {

    @Autowired
    private VacanteRepository vacanteRepository;

    @Override
    public List<Vacante> findAll() {
        return vacanteRepository.findAll();
    }

    @Override
    public Vacante findById(Integer id) {
        return vacanteRepository.findById(id).orElse(null);
    }

    @Override
    public Vacante save(Vacante vacante) {
        return vacanteRepository.save(vacante);
    }

    @Override
    public Vacante update(Vacante vacante) {
        return vacanteRepository.save(vacante);
    }

    @Override
    public void delete(Integer id) {
        vacanteRepository.deleteById(id);
    }
}
