package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.IncidentDto;

import java.util.List;

public interface IncidentService {
    IncidentDto createIncident(IncidentDto incidentDto);
    IncidentDto getIncidentById(Long incidentId);
    List<IncidentDto> getAllIncidents();
    IncidentDto updateIncident(Long incidentId, IncidentDto updatedIncident);
    void deleteIncident(Long incidentId);
}
