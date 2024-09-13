package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.EventDto;
import com.lannister.relieve_backend.entity.Event;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.EventMapper;
import com.lannister.relieve_backend.repository.EventRepository;
import com.lannister.relieve_backend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {

    private EventRepository eventRepository;

    @Override
    public EventDto createEvent(EventDto eventDto) {
        Event event = EventMapper.mapToEvent(eventDto);
        Event savedEvent = eventRepository.save(event);
        return EventMapper.mapToEventDto(savedEvent);
    }

    @Override
    public EventDto getEventById(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + eventId));
        return EventMapper.mapToEventDto(event);
    }

    @Override
    public List<EventDto> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return events.stream().map(EventMapper::mapToEventDto).collect(Collectors.toList());
    }

    @Override
    public EventDto updateEvent(Long eventId, EventDto updatedEvent) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + eventId));

        event.setEventName(updatedEvent.getEventName());
        event.setDescription(updatedEvent.getDescription());
        event.setContacts(updatedEvent.getContacts());
        event.setDateFrom(updatedEvent.getDateFrom());
        event.setDateTo(updatedEvent.getDateTo());
        event.setLocation(updatedEvent.getLocation());
        event.setVolunteers(updatedEvent.getVolunteers());
        event.setEventAdmins(updatedEvent.getEventAdmins());
        event.setVolunteerCalls(updatedEvent.getVolunteerCalls());
        event.setDonationCalls(updatedEvent.getDonationCalls());
        event.setReports(updatedEvent.getReports());

        Event updatedEventObj = eventRepository.save(event);

        return EventMapper.mapToEventDto(updatedEventObj);
    }

    @Override
    public void deleteEvent(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + eventId));
        eventRepository.deleteById(eventId);
    }
}
