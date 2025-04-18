package gestion.service;

import java.util.List;

import gestion.entity.Solicitud;

public interface SolicitudService {
    List<Solicitud> findAll();
    Solicitud findById(Integer id);
    Solicitud save(Solicitud solicitud);
    Solicitud update(Solicitud solicitud);
    void delete(Integer id);
}
