package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.VolunteerCallDto;
import com.lannister.relieve_backend.entity.VolunteerCall;

public class VolunteerCallMapper {

    public static VolunteerCallDto mapToVolunteerCallDto(VolunteerCall volunteerCall) {
        VolunteerCallDto volunteerCallDto = new VolunteerCallDto();
        volunteerCallDto.setVcId(volunteerCall.getVcId());
        volunteerCallDto.setEventId(volunteerCall.getEventId());
        volunteerCallDto.setTitle(volunteerCall.getTitle());
        volunteerCallDto.setDescription(volunteerCall.getDescription());
        volunteerCallDto.setLocation(volunteerCall.getLocation());
        volunteerCallDto.setDeadline(volunteerCall.getDeadline());
        volunteerCallDto.setCreationTime(volunteerCall.getCreationTime());
        volunteerCallDto.setEventName(volunteerCall.getEventName());

        return volunteerCallDto;
    }

    public static VolunteerCall mapToVolunteerCall(VolunteerCallDto volunteerCallDto) {
        VolunteerCall volunteerCall = new VolunteerCall();
        volunteerCall.setVcId(volunteerCallDto.getVcId());
        volunteerCall.setEventId(volunteerCallDto.getEventId());
        volunteerCall.setTitle(volunteerCallDto.getTitle());
        volunteerCall.setDescription(volunteerCallDto.getDescription());
        volunteerCall.setLocation(volunteerCallDto.getLocation());
        volunteerCall.setDeadline(volunteerCallDto.getDeadline());
        volunteerCall.setCreationTime(volunteerCallDto.getCreationTime());
        volunteerCall.setEventName(volunteerCallDto.getEventName());


        return volunteerCall;
    }
}
