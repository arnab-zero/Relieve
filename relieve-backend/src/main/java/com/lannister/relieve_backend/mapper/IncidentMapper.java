package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.IncidentDto;
import com.lannister.relieve_backend.entity.Incident;

public class IncidentMapper {
    public static IncidentDto mapToIncidentDto(Incident incident) {
        IncidentDto incidentDto = new IncidentDto();
        incidentDto.setIncidentId(incident.getIncidentId());
        incidentDto.setUserId(incident.getUserId());
        incidentDto.setEventId(incident.getEventId());
        incidentDto.setUpdateDetail(incident.getUpdateDetail());
        incidentDto.setLocation(incident.getLocation());
        incidentDto.setUpazilla(incident.getUpazilla());
        incidentDto.setZilla(incident.getZilla());
        incidentDto.setContact(incident.getContact());
        incidentDto.setRequestType(incident.getRequestType());
        incidentDto.setMapLink(incident.getMapLink());
        incidentDto.setStatus(incident.getStatus());
        incidentDto.setVerified(incident.isVerified());
        incidentDto.setPostedAt(incident.getPostedAt());
        incidentDto.setLastUpdatedAt(incident.getLastUpdatedAt());

        return incidentDto;
    }

    public static Incident mapToIncident(IncidentDto incidentDto){
        Incident incident = new Incident();

        incident.setIncidentId(incidentDto.getIncidentId());
        incident.setUserId(incidentDto.getUserId());
        incident.setEventId(incidentDto.getEventId());
        incident.setUpdateDetail(incidentDto.getUpdateDetail());
        incident.setLocation(incidentDto.getLocation());
        incident.setUpazilla(incidentDto.getUpazilla());
        incident.setZilla(incidentDto.getZilla());
        incident.setContact(incidentDto.getContact());
        incident.setRequestType(incidentDto.getRequestType());
        incident.setMapLink(incidentDto.getMapLink());
        incident.setStatus(incidentDto.getStatus());
        incident.setVerified(incidentDto.isVerified());
        incident.setPostedAt(incidentDto.getPostedAt());
        incident.setLastUpdatedAt(incidentDto.getLastUpdatedAt());

        return incident;
    }
}
