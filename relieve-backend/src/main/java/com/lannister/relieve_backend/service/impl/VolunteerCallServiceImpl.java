package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.VolunteerCallDto;
import com.lannister.relieve_backend.entity.VolunteerCall;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.VolunteerCallMapper;
import com.lannister.relieve_backend.repository.VolunteerCallRepository;
import com.lannister.relieve_backend.service.VolunteerCallService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VolunteerCallServiceImpl implements VolunteerCallService {

    private VolunteerCallRepository volunteerCallRepository;

    @Override
    public VolunteerCallDto createVolunteerCall(VolunteerCallDto volunteerCallDto) {
        VolunteerCall volunteerCall = VolunteerCallMapper.mapToVolunteerCall(volunteerCallDto);
        VolunteerCall savedVolunteerCall = volunteerCallRepository.save(volunteerCall);
        return VolunteerCallMapper.mapToVolunteerCallDto(savedVolunteerCall);
    }

    @Override
    public VolunteerCallDto getVolunteerCallById(Long vcId) {
        VolunteerCall volunteerCall = volunteerCallRepository.findById(vcId)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer call not found with id: " + vcId));
        return VolunteerCallMapper.mapToVolunteerCallDto(volunteerCall);
    }

    @Override
    public List<VolunteerCallDto> getAllVolunteerCalls() {
        List<VolunteerCall> volunteerCalls = volunteerCallRepository.findAll();
        return volunteerCalls.stream()
                .map(VolunteerCallMapper::mapToVolunteerCallDto)
                .collect(Collectors.toList());
    }

    @Override
    public VolunteerCallDto updateVolunteerCall(Long vcId, VolunteerCallDto volunteerCallDto) {
        VolunteerCall volunteerCall = volunteerCallRepository.findById(vcId)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer call not found with id: " + vcId));

        volunteerCall.setVcId(volunteerCallDto.getVcId());
        volunteerCall.setEventId(volunteerCallDto.getEventId());
        volunteerCall.setTitle(volunteerCallDto.getTitle());
        volunteerCall.setDescription(volunteerCallDto.getDescription());
        volunteerCall.setLocation(volunteerCallDto.getLocation());
        volunteerCall.setDeadline(volunteerCallDto.getDeadline());
        volunteerCall.setCreationTime(volunteerCallDto.getCreationTime());
        volunteerCall.setEventName(volunteerCallDto.getEventName());

        VolunteerCall updatedVolunteerCall = volunteerCallRepository.save(volunteerCall);
        return VolunteerCallMapper.mapToVolunteerCallDto(updatedVolunteerCall);
    }

    @Override
    public void deleteVolunteerCall(Long vcId) {
        VolunteerCall volunteerCall = volunteerCallRepository.findById(vcId)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer call not found with id: " + vcId));
        volunteerCallRepository.delete(volunteerCall);
    }
}
