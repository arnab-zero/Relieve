package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.EventDto;
import com.lannister.relieve_backend.entity.Event;

public class EventMapper {

    public static EventDto mapToEventDto(Event event) {
        return new EventDto(
                event.getEventId(),
                event.getEventName(),
                event.getDescription(),
                event.getContacts(),
                event.getDateFrom(),
                event.getDateTo(),
                event.getLocation(),
                event.getVolunteers(),
                event.getEventAdmins(),
                event.getVolunteerCalls(),
                event.getDonationCalls(),
                event.getReports()
        );
    }

    public static Event mapToEvent(EventDto eventDto) {
        return new Event(
                eventDto.getEventId(),
                eventDto.getEventName(),
                eventDto.getDescription(),
                eventDto.getContacts(),
                eventDto.getDateFrom(),
                eventDto.getDateTo(),
                eventDto.getLocation(),
                eventDto.getVolunteers(),
                eventDto.getEventAdmins(),
                eventDto.getVolunteerCalls(),
                eventDto.getDonationCalls(),
                eventDto.getReports()
        );
    }
}
