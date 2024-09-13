package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.IncidentDto;
import com.lannister.relieve_backend.entity.Incident;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.IncidentMapper;
import com.lannister.relieve_backend.repository.IncidentRepository;
import com.lannister.relieve_backend.service.IncidentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class IncidentServiceImpl implements IncidentService {

    private IncidentRepository incidentRepository;

    @Override
    public IncidentDto createIncident(IncidentDto incidentDto) {
        Incident incident = IncidentMapper.mapToIncident(incidentDto);
        Incident savedIncident = incidentRepository.save(incident);
        return IncidentMapper.mapToIncidentDto((savedIncident));
    }

    @Override
    public IncidentDto getIncidentById(Long incidentId) {
        Incident incident = incidentRepository.findById(incidentId)
                .orElseThrow(()->new ResourceNotFoundException("No incident found with id: " + incidentId));
        return IncidentMapper.mapToIncidentDto(incident);
    }

    @Override
    public List<IncidentDto> getAllIncidents() {
        List<Incident> incidents = incidentRepository.findAll();
        return incidents.stream()
                .map((incident) -> IncidentMapper.mapToIncidentDto(incident))
                .collect(Collectors.toList());
    }

    @Override
    public IncidentDto updateIncident(Long incidentId, IncidentDto updatedIncident) {
        Incident incident = incidentRepository.findById(incidentId)
                .orElseThrow(() -> new ResourceNotFoundException("No incident found with id: " + incidentId));

        incident.setIncidentId(updatedIncident.getIncidentId());
        incident.setUserId(updatedIncident.getUserId());
        incident.setEventId(updatedIncident.getEventId());
        incident.setUpdateDetail(updatedIncident.getUpdateDetail());
        incident.setLocation(updatedIncident.getLocation());
        incident.setUpazilla(updatedIncident.getUpazilla());
        incident.setZilla(updatedIncident.getZilla());
        incident.setContact(updatedIncident.getContact());
        incident.setRequestType(updatedIncident.getRequestType());
        incident.setMapLink(updatedIncident.getMapLink());
        incident.setStatus(updatedIncident.getStatus());
        incident.setVerified(updatedIncident.isVerified());
        incident.setPostedAt(updatedIncident.getPostedAt());
        incident.setLastUpdatedAt(updatedIncident.getLastUpdatedAt());

        Incident updatedIncidentObj = incidentRepository.save(incident);
        return IncidentMapper.mapToIncidentDto(updatedIncidentObj);
    }

    @Override
    public void deleteIncident(Long incidentId) {
        Incident incident = incidentRepository.findById(incidentId)
                .orElseThrow(() -> new ResourceNotFoundException("Incident not found with Id: " + incidentId));
        incidentRepository.deleteById(incidentId);
    }
}
