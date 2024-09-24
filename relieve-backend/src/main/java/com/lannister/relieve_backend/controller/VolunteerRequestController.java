package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.VolunteerRequestDto;
import com.lannister.relieve_backend.service.VolunteerRequestService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/volunteer-requests")
public class VolunteerRequestController {

    private VolunteerRequestService volunteerRequestService;

    @PostMapping
    public ResponseEntity<String> createVolunteerRequest(@RequestBody VolunteerRequestDto volunteerRequestDto) {
        volunteerRequestService.createVolunteerRequest(volunteerRequestDto);
        return new ResponseEntity<>("Volunteer Request Created Successfully!", HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<VolunteerRequestDto> getVolunteerRequestById(@PathVariable("id") Long requestId) {
        VolunteerRequestDto volunteerRequestDto = volunteerRequestService.getVolunteerRequestById(requestId);
        return ResponseEntity.ok(volunteerRequestDto);
    }

    @GetMapping
    public ResponseEntity<List<VolunteerRequestDto>> getAllVolunteerRequests() {
        List<VolunteerRequestDto> volunteerRequests = volunteerRequestService.getAllVolunteerRequests();
        return ResponseEntity.ok(volunteerRequests);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> updateVolunteerRequest(@PathVariable("id") Long requestId, @RequestBody VolunteerRequestDto volunteerRequestDto) {
        volunteerRequestService.updateVolunteerRequest(requestId, volunteerRequestDto);
        return new ResponseEntity<>("Volunteer Request Updated Successfully!", HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteVolunteerRequest(@PathVariable("id") Long requestId) {
        volunteerRequestService.deleteVolunteerRequest(requestId);
        return new ResponseEntity<>("Volunteer Request Deleted Successfully!", HttpStatus.OK);
    }
}
