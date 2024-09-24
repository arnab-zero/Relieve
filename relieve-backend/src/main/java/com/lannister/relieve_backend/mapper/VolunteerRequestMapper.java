package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.VolunteerRequestDto;
import com.lannister.relieve_backend.entity.VolunteerRequest;

public class VolunteerRequestMapper {

    public static VolunteerRequestDto mapToVolunteerRequestDto(VolunteerRequest volunteerRequest) {
        VolunteerRequestDto dto = new VolunteerRequestDto();
        dto.setRequestId(volunteerRequest.getRequestId());
        dto.setUserId(volunteerRequest.getUserId());
        dto.setEventId(volunteerRequest.getEventId());
        dto.setEventName(volunteerRequest.getEventName());
        dto.setVcId(volunteerRequest.getVcId());
        dto.setComment(volunteerRequest.getComment());
        dto.setCreatedAt(volunteerRequest.getCreatedAt());
        dto.setApproved(volunteerRequest.isApproved());
        return dto;
    }

    public static VolunteerRequest mapToVolunteerRequest(VolunteerRequestDto dto) {
        VolunteerRequest volunteerRequest = new VolunteerRequest();
        volunteerRequest.setRequestId(dto.getRequestId());
        volunteerRequest.setUserId(dto.getUserId());
        volunteerRequest.setEventId(dto.getEventId());
        volunteerRequest.setEventName(dto.getEventName());
        volunteerRequest.setVcId(dto.getVcId());
        volunteerRequest.setComment(dto.getComment());
        volunteerRequest.setCreatedAt(dto.getCreatedAt());
        volunteerRequest.setApproved(dto.isApproved());
        return volunteerRequest;
    }
}
