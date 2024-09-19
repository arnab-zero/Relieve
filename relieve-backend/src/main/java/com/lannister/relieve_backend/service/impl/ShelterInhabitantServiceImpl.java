package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.ShelterInhabitantDto;
import com.lannister.relieve_backend.entity.ShelterInhabitant;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.ShelterInhabitantMapper;
import com.lannister.relieve_backend.repository.ShelterInhabitantRepository;
import com.lannister.relieve_backend.service.ShelterInhabitantService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ShelterInhabitantServiceImpl implements ShelterInhabitantService {

    private final ShelterInhabitantRepository shelterInhabitantRepository;

    @Override
    public ShelterInhabitantDto createShelterInhabitant(ShelterInhabitantDto shelterInhabitantDto) {
        ShelterInhabitant shelterInhabitant = ShelterInhabitantMapper.mapToShelterInhabitant(shelterInhabitantDto);
        ShelterInhabitant savedShelterInhabitant = shelterInhabitantRepository.save(shelterInhabitant);
        return ShelterInhabitantMapper.mapToShelterInhabitantDto(savedShelterInhabitant);
    }

    @Override
    public ShelterInhabitantDto getShelterInhabitantById(Long siId) {
        ShelterInhabitant shelterInhabitant = shelterInhabitantRepository.findById(siId)
                .orElseThrow(() -> new ResourceNotFoundException("Shelter Inhabitant does not exist with id: " + siId));
        return ShelterInhabitantMapper.mapToShelterInhabitantDto(shelterInhabitant);
    }

    @Override
    public List<ShelterInhabitantDto> getAllShelterInhabitants() {
        List<ShelterInhabitant> shelterInhabitants = shelterInhabitantRepository.findAll();
        return shelterInhabitants.stream()
                .map(ShelterInhabitantMapper::mapToShelterInhabitantDto)
                .collect(Collectors.toList());
    }

    @Override
    public ShelterInhabitantDto updateShelterInhabitant(Long siId, ShelterInhabitantDto updatedShelterInhabitant) {
        ShelterInhabitant shelterInhabitant = shelterInhabitantRepository.findById(siId)
                .orElseThrow(() -> new ResourceNotFoundException("Shelter Inhabitant does not exist with id: " + siId));

        shelterInhabitant.setName(updatedShelterInhabitant.getName());
        shelterInhabitant.setContact(updatedShelterInhabitant.getContact());
        shelterInhabitant.setTotalMember(updatedShelterInhabitant.getTotalMember());
        shelterInhabitant.setNumberOfMale(updatedShelterInhabitant.getNumberOfMale());
        shelterInhabitant.setNumberOfFemale(updatedShelterInhabitant.getNumberOfFemale());
        shelterInhabitant.setNumberOfChild(updatedShelterInhabitant.getNumberOfChild());
        shelterInhabitant.setReligion(updatedShelterInhabitant.getReligion());
        shelterInhabitant.setShelterId(updatedShelterInhabitant.getShelterId());
        shelterInhabitant.setRemarks(updatedShelterInhabitant.getRemarks());

        ShelterInhabitant updatedEntity = shelterInhabitantRepository.save(shelterInhabitant);
        return ShelterInhabitantMapper.mapToShelterInhabitantDto(updatedEntity);
    }

    @Override
    public void deleteShelterInhabitant(Long siId) {
        ShelterInhabitant shelterInhabitant = shelterInhabitantRepository.findById(siId)
                .orElseThrow(() -> new ResourceNotFoundException("Shelter Inhabitant does not exist with id: " + siId));
        shelterInhabitantRepository.delete(shelterInhabitant);
    }
}
