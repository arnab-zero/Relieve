package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.IncidentDto;
import com.lannister.relieve_backend.service.IncidentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/incident")
public class IncidentController {

    private IncidentService incidentService;

    @PostMapping
    public ResponseEntity<IncidentDto> createIncident(@RequestBody IncidentDto incidentDto){
        IncidentDto savedIncident = incidentService.createIncident(incidentDto);
        return new ResponseEntity<>(savedIncident, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<IncidentDto> getIncidentById(@PathVariable("id") Long incidentId){
        IncidentDto incidentDto = incidentService.getIncidentById(incidentId);
        if(incidentDto != null) {
            return ResponseEntity.ok(incidentDto);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("{incidentId}")
    public ResponseEntity<IncidentDto> updateIncident(@PathVariable("incidentId") Long incidentId, @RequestBody IncidentDto updatedIncident){
        IncidentDto incidentDto = incidentService.updateIncident(incidentId, updatedIncident);
        return ResponseEntity.ok(incidentDto);
    }

    @DeleteMapping("{incidentId}")
    public ResponseEntity<String> deleteIncident(@PathVariable("incidentId") Long incidentId){
        incidentService.deleteIncident(incidentId);
        return ResponseEntity.ok("Incident deleted successfully.");
    }

}
