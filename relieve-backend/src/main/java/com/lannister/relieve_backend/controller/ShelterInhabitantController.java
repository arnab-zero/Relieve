package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.ShelterInhabitantDto;
import com.lannister.relieve_backend.service.ShelterInhabitantService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/shelter-inhabitants")
public class ShelterInhabitantController {

    private final ShelterInhabitantService shelterInhabitantService;

    // Create a new Shelter Inhabitant
    @PostMapping
    public ResponseEntity<ShelterInhabitantDto> createShelterInhabitant(@RequestBody ShelterInhabitantDto shelterInhabitantDto) {
        ShelterInhabitantDto createdShelterInhabitant = shelterInhabitantService.createShelterInhabitant(shelterInhabitantDto);
        return new ResponseEntity<>(createdShelterInhabitant, HttpStatus.CREATED);
    }

    // Get a Shelter Inhabitant by ID
    @GetMapping("/{siId}")
    public ResponseEntity<ShelterInhabitantDto> getShelterInhabitantById(@PathVariable Long siId) {
        ShelterInhabitantDto shelterInhabitant = shelterInhabitantService.getShelterInhabitantById(siId);
        return new ResponseEntity<>(shelterInhabitant, HttpStatus.OK);
    }

    // Get all Shelter Inhabitants
    @GetMapping
    public ResponseEntity<List<ShelterInhabitantDto>> getAllShelterInhabitants() {
        List<ShelterInhabitantDto> shelterInhabitants = shelterInhabitantService.getAllShelterInhabitants();
        return new ResponseEntity<>(shelterInhabitants, HttpStatus.OK);
    }

    // Update a Shelter Inhabitant
    @PutMapping("/{siId}")
    public ResponseEntity<ShelterInhabitantDto> updateShelterInhabitant(
            @PathVariable Long siId,
            @RequestBody ShelterInhabitantDto shelterInhabitantDto
    ) {
        ShelterInhabitantDto updatedShelterInhabitant = shelterInhabitantService.updateShelterInhabitant(siId, shelterInhabitantDto);
        return new ResponseEntity<>(updatedShelterInhabitant, HttpStatus.OK);
    }

    // Delete a Shelter Inhabitant
    @DeleteMapping("/{siId}")
    public ResponseEntity<Void> deleteShelterInhabitant(@PathVariable Long siId) {
        shelterInhabitantService.deleteShelterInhabitant(siId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
