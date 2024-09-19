package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.ShelterInhabitantDto;
import com.lannister.relieve_backend.entity.ShelterInhabitant;

public class ShelterInhabitantMapper {

    public static ShelterInhabitantDto mapToShelterInhabitantDto(ShelterInhabitant shelterInhabitant) {
        return new ShelterInhabitantDto(
                shelterInhabitant.getSiId(),
                shelterInhabitant.getName(),
                shelterInhabitant.getContact(),
                shelterInhabitant.getTotalMember(),
                shelterInhabitant.getNumberOfMale(),
                shelterInhabitant.getNumberOfFemale(),
                shelterInhabitant.getNumberOfChild(),
                shelterInhabitant.getReligion(),
                shelterInhabitant.getShelterId(),
                shelterInhabitant.getRemarks()
        );
    }

    public static ShelterInhabitant mapToShelterInhabitant(ShelterInhabitantDto shelterInhabitantDto) {
        return new ShelterInhabitant(
                shelterInhabitantDto.getSiId(),
                shelterInhabitantDto.getName(),
                shelterInhabitantDto.getContact(),
                shelterInhabitantDto.getTotalMember(),
                shelterInhabitantDto.getNumberOfMale(),
                shelterInhabitantDto.getNumberOfFemale(),
                shelterInhabitantDto.getNumberOfChild(),
                shelterInhabitantDto.getReligion(),
                shelterInhabitantDto.getShelterId(),
                shelterInhabitantDto.getRemarks()
        );
    }
}
