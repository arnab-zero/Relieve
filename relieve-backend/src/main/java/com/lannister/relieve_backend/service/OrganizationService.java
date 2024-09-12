package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.OrganizationDto;

import java.util.List;

public interface OrganizationService {
    OrganizationDto createOrganization(OrganizationDto organizationDto);
    OrganizationDto getOrganizationById(Long orgId);
    List<OrganizationDto> getAllOrganizations();
    OrganizationDto updateOrganization(Long orgId, OrganizationDto updatedOrganization);
    void deleteOrganization(Long orgId);
}
