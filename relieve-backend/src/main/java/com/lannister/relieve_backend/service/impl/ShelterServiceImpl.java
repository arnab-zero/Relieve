package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.ShelterDto;
import com.lannister.relieve_backend.entity.Shelter;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.ShelterMapper;
import com.lannister.relieve_backend.repository.ShelterRepository;
import com.lannister.relieve_backend.service.ShelterService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ShelterServiceImpl implements ShelterService {

    private final ShelterRepository shelterRepository;

    @Override
    public ShelterDto createShelter(ShelterDto shelterDto) {
        Shelter shelter = ShelterMapper.mapToShelter(shelterDto);
        Shelter savedShelter = shelterRepository.save(shelter);
        return ShelterMapper.mapToShelterDto(savedShelter);
    }

    @Override
    public ShelterDto getShelterById(Long shelterId) {
        Shelter shelter = shelterRepository.findById(shelterId)
                .orElseThrow(() -> new ResourceNotFoundException("Shelter not found with id: " + shelterId));
        return ShelterMapper.mapToShelterDto(shelter);
    }

    @Override
    public List<ShelterDto> getAllShelters() {
        List<Shelter> shelters = shelterRepository.findAll();
        return shelters.stream()
                .map(ShelterMapper::mapToShelterDto)
                .collect(Collectors.toList());
    }

    @Override
    public ShelterDto updateShelter(Long shelterId, ShelterDto updatedShelter) {
        Shelter shelter = shelterRepository.findById(shelterId)
                .orElseThrow(() -> new ResourceNotFoundException("Shelter not found with id: " + shelterId));

        shelter.setName(updatedShelter.getName());
        shelter.setLocation(updatedShelter.getLocation());
        shelter.setContactNumbers(updatedShelter.getContactNumbers());
        shelter.setCapacity(updatedShelter.getCapacity());
        shelter.setCurrentPeople(updatedShelter.getCurrentPeople());
        shelter.setEventId(updatedShelter.getEventId());

        Shelter updatedShelterObj = shelterRepository.save(shelter);
        return ShelterMapper.mapToShelterDto(updatedShelterObj);
    }

    @Override
    public void deleteShelter(Long shelterId) {
        Shelter shelter = shelterRepository.findById(shelterId)
                .orElseThrow(() -> new ResourceNotFoundException("Shelter not found with id: " + shelterId));
        shelterRepository.deleteById(shelterId);
    }
}
