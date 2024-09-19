package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.ShelterInhabitantDto;

import java.util.List;

public interface ShelterInhabitantService {

    ShelterInhabitantDto createShelterInhabitant(ShelterInhabitantDto shelterInhabitantDto);

    ShelterInhabitantDto getShelterInhabitantById(Long siId);

    List<ShelterInhabitantDto> getAllShelterInhabitants();

    ShelterInhabitantDto updateShelterInhabitant(Long siId, ShelterInhabitantDto updatedShelterInhabitant);

    void deleteShelterInhabitant(Long siId);
}
