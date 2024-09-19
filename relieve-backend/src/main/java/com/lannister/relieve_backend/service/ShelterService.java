package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.ShelterDto;

import java.util.List;

public interface ShelterService {

    ShelterDto createShelter(ShelterDto shelterDto);
    ShelterDto getShelterById(Long shelterId);
    List<ShelterDto> getAllShelters();
    ShelterDto updateShelter(Long shelterId, ShelterDto updatedShelter);
    void deleteShelter(Long shelterId);
}
