package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.ShelterDto;
import com.lannister.relieve_backend.entity.Shelter;

public class ShelterMapper {

    public static ShelterDto mapToShelterDto(Shelter shelter) {
        return new ShelterDto(
                shelter.getShelterId(),
                shelter.getName(),
                shelter.getLocation(),
                shelter.getContactNumbers(),
                shelter.getCapacity(),
                shelter.getCurrentPeople(),
                shelter.getEventId()
        );
    }

    public static Shelter mapToShelter(ShelterDto shelterDto) {
        return new Shelter(
                shelterDto.getShelterId(),
                shelterDto.getName(),
                shelterDto.getLocation(),
                shelterDto.getContactNumbers(),
                shelterDto.getCapacity(),
                shelterDto.getCurrentPeople(),
                shelterDto.getEventId()
        );
    }
}
