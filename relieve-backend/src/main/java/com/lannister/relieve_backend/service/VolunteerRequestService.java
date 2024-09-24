package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.VolunteerRequestDto;

import java.util.List;

public interface VolunteerRequestService {
    VolunteerRequestDto createVolunteerRequest(VolunteerRequestDto volunteerRequestDto);
    VolunteerRequestDto getVolunteerRequestById(Long requestId);
    List<VolunteerRequestDto> getAllVolunteerRequests();
    VolunteerRequestDto updateVolunteerRequest(Long requestId, VolunteerRequestDto volunteerRequestDto);
    void deleteVolunteerRequest(Long requestId);
}
