package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.VolunteerCallDto;

import java.util.List;

public interface VolunteerCallService {
    VolunteerCallDto createVolunteerCall(VolunteerCallDto volunteerCallDto);
    VolunteerCallDto getVolunteerCallById(Long vcId);
    List<VolunteerCallDto> getAllVolunteerCalls();
    VolunteerCallDto updateVolunteerCall(Long vcId, VolunteerCallDto volunteerCallDto);
    void deleteVolunteerCall(Long vcId);
}
