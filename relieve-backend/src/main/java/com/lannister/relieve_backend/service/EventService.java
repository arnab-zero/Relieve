package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.EventDto;

import java.util.List;

public interface EventService {

    EventDto createEvent(EventDto eventDto);
    EventDto getEventById(Long eventId);
    List<EventDto> getAllEvents();
    EventDto updateEvent(Long eventId, EventDto updatedEvent);
    void deleteEvent(Long eventId);
}
