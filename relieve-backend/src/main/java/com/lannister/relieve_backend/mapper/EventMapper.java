package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.EventDto;
import com.lannister.relieve_backend.entity.Event;

public class EventMapper {

    public static EventDto mapToEventDto(Event event) {
        EventDto eventDto = new EventDto();

        eventDto.setEventId(event.getEventId());
        eventDto.setCommunityId(event.getCommunityId());
        eventDto.setEventName(event.getEventName());
        eventDto.setDescription(event.getDescription());
        eventDto.setContacts(event.getContacts());
        eventDto.setDateFrom(event.getDateFrom());
        eventDto.setDateTo(event.getDateTo());
        eventDto.setLocation(event.getLocation());
        eventDto.setVolunteers(event.getVolunteers());
        eventDto.setEventAdmins(event.getEventAdmins());
        eventDto.setVolunteerCalls(event.getVolunteerCalls());
        eventDto.setDonationCalls(event.getDonationCalls());
        eventDto.setReports(event.getReports());

        return eventDto;
    }

    public static Event mapToEvent(EventDto eventDto) {
        Event event = new Event();

        event.setEventId(eventDto.getEventId());
        event.setCommunityId(eventDto.getCommunityId());
        event.setEventName(eventDto.getEventName());
        event.setDescription(eventDto.getDescription());
        event.setContacts(eventDto.getContacts());
        event.setDateFrom(eventDto.getDateFrom());
        event.setDateTo(eventDto.getDateTo());
        event.setLocation(eventDto.getLocation());
        event.setVolunteers(eventDto.getVolunteers());
        event.setEventAdmins(eventDto.getEventAdmins());
        event.setVolunteerCalls(eventDto.getVolunteerCalls());
        event.setDonationCalls(eventDto.getDonationCalls());
        event.setReports(eventDto.getReports());

        return event;
    }
}
