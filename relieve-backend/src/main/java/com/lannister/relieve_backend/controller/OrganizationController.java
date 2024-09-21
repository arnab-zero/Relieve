package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.OrganizationDto;
import com.lannister.relieve_backend.service.OrganizationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/organizations")
public class OrganizationController {

    private OrganizationService organizationService;

    // create new organization
    @PostMapping
    public ResponseEntity<OrganizationDto> createOrganization(@RequestBody OrganizationDto organizationDto) {
        OrganizationDto savedOrganization = organizationService.createOrganization(organizationDto);
        return new ResponseEntity<>(savedOrganization, HttpStatus.CREATED);
    }

    // Get organization by id
    @GetMapping("{orgId}")
    public ResponseEntity<OrganizationDto> getOrganizationById(@PathVariable("orgId") Long orgId) {
        OrganizationDto organizationDto = organizationService.getOrganizationById(orgId);
        return ResponseEntity.ok(organizationDto);
    }

    // Get all organizations
    @GetMapping
    public ResponseEntity<List<OrganizationDto>> getAllOrganizations() {
        List<OrganizationDto> organizations = organizationService.getAllOrganizations();
        return ResponseEntity.ok(organizations);
    }


    // Update an organization api
    @PutMapping("{orgId}")
    public ResponseEntity<OrganizationDto> updateOrganization(@PathVariable("orgId") Long orgId,
                                                              @RequestBody OrganizationDto updatedOrganization) {
        OrganizationDto organizationDto = organizationService.updateOrganization(orgId, updatedOrganization);
        return ResponseEntity.ok(organizationDto);
    }

    // Delete an Organization
    @DeleteMapping("{orgId}")
    public ResponseEntity<String> deleteOrganization(@PathVariable("orgId") Long orgId) {
        organizationService.deleteOrganization(orgId);
        return ResponseEntity.ok("Organization Deleted Successfully!.");
    }
}
