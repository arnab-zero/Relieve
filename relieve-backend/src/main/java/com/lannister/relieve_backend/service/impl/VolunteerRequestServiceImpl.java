package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.VolunteerRequestDto;
import com.lannister.relieve_backend.entity.VolunteerRequest;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.VolunteerRequestMapper;
import com.lannister.relieve_backend.repository.VolunteerRequestRepository;
import com.lannister.relieve_backend.service.VolunteerRequestService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VolunteerRequestServiceImpl implements VolunteerRequestService {

    private VolunteerRequestRepository volunteerRequestRepository;

    @Override
    public VolunteerRequestDto createVolunteerRequest(VolunteerRequestDto volunteerRequestDto) {
        VolunteerRequest volunteerRequest = VolunteerRequestMapper.mapToVolunteerRequest(volunteerRequestDto);
        VolunteerRequest savedVolunteerRequest = volunteerRequestRepository.save(volunteerRequest);
        return VolunteerRequestMapper.mapToVolunteerRequestDto(savedVolunteerRequest);
    }

    @Override
    public VolunteerRequestDto getVolunteerRequestById(Long requestId) {
        VolunteerRequest volunteerRequest = volunteerRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer Request not found with id: " + requestId));
        return VolunteerRequestMapper.mapToVolunteerRequestDto(volunteerRequest);
    }

    @Override
    public List<VolunteerRequestDto> getAllVolunteerRequests() {
        return volunteerRequestRepository.findAll()
                .stream()
                .map(VolunteerRequestMapper::mapToVolunteerRequestDto)
                .collect(Collectors.toList());
    }

    @Override
    public VolunteerRequestDto updateVolunteerRequest(Long requestId, VolunteerRequestDto volunteerRequestDto) {
        VolunteerRequest volunteerRequest = volunteerRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer Request not found with id: " + requestId));

        volunteerRequest.setUserId(volunteerRequestDto.getUserId());
        volunteerRequest.setEventId(volunteerRequestDto.getEventId());
        volunteerRequest.setEventName(volunteerRequestDto.getEventName());
        volunteerRequest.setVcId(volunteerRequestDto.getVcId());
        volunteerRequest.setComment(volunteerRequestDto.getComment());
        volunteerRequest.setCreatedAt(volunteerRequestDto.getCreatedAt());
        volunteerRequest.setApproved(volunteerRequestDto.isApproved());

        VolunteerRequest updatedVolunteerRequest = volunteerRequestRepository.save(volunteerRequest);
        return VolunteerRequestMapper.mapToVolunteerRequestDto(updatedVolunteerRequest);
    }

    @Override
    public void deleteVolunteerRequest(Long requestId) {
        VolunteerRequest volunteerRequest = volunteerRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer Request not found with id: " + requestId));
        volunteerRequestRepository.deleteById(requestId);
    }
}
