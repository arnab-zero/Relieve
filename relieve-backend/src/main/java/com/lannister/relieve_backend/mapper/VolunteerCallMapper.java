package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.VolunteerCallDto;
import com.lannister.relieve_backend.entity.VolunteerCall;

public class VolunteerCallMapper {

    public static VolunteerCallDto mapToVolunteerCallDto(VolunteerCall volunteerCall) {
        return new VolunteerCallDto(
                volunteerCall.getVcId(),
                volunteerCall.getEventId(),
                volunteerCall.getTitle(),
                volunteerCall.getDescription(),
                volunteerCall.getLocation(),
                volunteerCall.getDeadline(),
                volunteerCall.getCreationTime()
        );
    }

    public static VolunteerCall mapToVolunteerCall(VolunteerCallDto volunteerCallDto) {
        return new VolunteerCall(
                volunteerCallDto.getVcId(),
                volunteerCallDto.getEventId(),
                volunteerCallDto.getTitle(),
                volunteerCallDto.getDescription(),
                volunteerCallDto.getLocation(),
                volunteerCallDto.getDeadline(),
                volunteerCallDto.getCreationTime()
        );
    }
}
