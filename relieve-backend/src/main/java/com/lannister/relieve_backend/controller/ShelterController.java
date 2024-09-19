package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.ShelterDto;
import com.lannister.relieve_backend.service.ShelterService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/shelters")
public class ShelterController {

    private final ShelterService shelterService;

    // Create a new Shelter
    @PostMapping
    public ResponseEntity<ShelterDto> createShelter(@RequestBody ShelterDto shelterDto) {
        ShelterDto savedShelter = shelterService.createShelter(shelterDto);
        return new ResponseEntity<>(savedShelter, HttpStatus.CREATED);
    }

    // Get Shelter by ID
    @GetMapping("{shelterId}")
    public ResponseEntity<ShelterDto> getShelterById(@PathVariable("shelterId") Long shelterId) {
        ShelterDto shelterDto = shelterService.getShelterById(shelterId);
        return ResponseEntity.ok(shelterDto);
    }

    // Get all Shelters
    @GetMapping
    public ResponseEntity<List<ShelterDto>> getAllShelters() {
        List<ShelterDto> shelters = shelterService.getAllShelters();
        return ResponseEntity.ok(shelters);
    }

    // Update Shelter
    @PutMapping("{shelterId}")
    public ResponseEntity<ShelterDto> updateShelter(@PathVariable("shelterId") Long shelterId, @RequestBody ShelterDto updatedShelter) {
        ShelterDto shelterDto = shelterService.updateShelter(shelterId, updatedShelter);
        return ResponseEntity.ok(shelterDto);
    }

    // Delete Shelter
    @DeleteMapping("{shelterId}")
    public ResponseEntity<String> deleteShelter(@PathVariable("shelterId") Long shelterId) {
        shelterService.deleteShelter(shelterId);
        return ResponseEntity.ok("Shelter deleted successfully.");
    }
}
