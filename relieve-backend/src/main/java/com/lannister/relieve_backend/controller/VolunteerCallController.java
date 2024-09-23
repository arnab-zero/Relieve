package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.VolunteerCallDto;
import com.lannister.relieve_backend.service.VolunteerCallService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/volunteer-calls")
public class VolunteerCallController {

    private VolunteerCallService volunteerCallService;

    @PostMapping
    public ResponseEntity<VolunteerCallDto> createVolunteerCall(@RequestBody VolunteerCallDto volunteerCallDto) {
        VolunteerCallDto savedVolunteerCall = volunteerCallService.createVolunteerCall(volunteerCallDto);
        return new ResponseEntity<>(savedVolunteerCall, HttpStatus.CREATED);
    }

    @GetMapping("{vcId}")
    public ResponseEntity<VolunteerCallDto> getVolunteerCallById(@PathVariable("vcId") Long vcId) {
        VolunteerCallDto volunteerCallDto = volunteerCallService.getVolunteerCallById(vcId);
        return ResponseEntity.ok(volunteerCallDto);
    }

    @GetMapping
    public ResponseEntity<List<VolunteerCallDto>> getAllVolunteerCalls() {
        List<VolunteerCallDto> volunteerCalls = volunteerCallService.getAllVolunteerCalls();
        return ResponseEntity.ok(volunteerCalls);
    }

    @PutMapping("{vcId}")
    public ResponseEntity<VolunteerCallDto> updateVolunteerCall(@PathVariable("vcId") Long vcId,
                                                                @RequestBody VolunteerCallDto volunteerCallDto) {
        VolunteerCallDto updatedVolunteerCall = volunteerCallService.updateVolunteerCall(vcId, volunteerCallDto);
        return ResponseEntity.ok(updatedVolunteerCall);
    }

    @DeleteMapping("{vcId}")
    public ResponseEntity<String> deleteVolunteerCall(@PathVariable("vcId") Long vcId) {
        volunteerCallService.deleteVolunteerCall(vcId);
        return ResponseEntity.ok("Volunteer call deleted successfully.");
    }
}
