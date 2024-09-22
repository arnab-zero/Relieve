package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.EventDto;
import com.lannister.relieve_backend.service.EventService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/events")
public class EventController {

    private EventService eventService;

    // Create new Event
    @PostMapping
    public ResponseEntity<EventDto> createEvent(@RequestBody EventDto eventDto) {
        EventDto savedEvent = eventService.createEvent(eventDto);
        return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);
    }

    // Get event by id
    @GetMapping("{eventId}")
    public ResponseEntity<EventDto> getEventById(@PathVariable("eventId") Long eventId) {
        EventDto eventDto = eventService.getEventById(eventId);
        return ResponseEntity.ok(eventDto);
    }

    // Get all events
    @GetMapping
    public ResponseEntity<List<EventDto>> getAllEvents() {
        List<EventDto> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    // Update event
    @PutMapping("{eventId}")
    public ResponseEntity<EventDto> updateEvent(@PathVariable("eventId") Long eventId, @RequestBody EventDto updatedEvent) {
        EventDto eventDto = eventService.updateEvent(eventId, updatedEvent);
        return ResponseEntity.ok(eventDto);
    }

    // Delete event
    @DeleteMapping("{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable("eventId") Long eventId) {
        eventService.deleteEvent(eventId);
        return ResponseEntity.ok("Event Deleted Successfully.");
    }
}
