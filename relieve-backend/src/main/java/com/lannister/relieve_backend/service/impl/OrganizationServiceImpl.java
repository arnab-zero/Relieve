package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.OrganizationDto;
import com.lannister.relieve_backend.entity.Organization;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.OrganizationMapper;
import com.lannister.relieve_backend.repository.OrganizationRepository;
import com.lannister.relieve_backend.service.OrganizationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrganizationServiceImpl implements OrganizationService {

    private OrganizationRepository organizationRepository;

    @Override
    public OrganizationDto createOrganization(OrganizationDto organizationDto) {
        Organization organization = OrganizationMapper.mapToOrganization(organizationDto);
        Organization savedOrganization = organizationRepository.save(organization);
        return OrganizationMapper.mapToOrganizationDto(savedOrganization);
    }

    @Override
    public OrganizationDto getOrganizationById(Long orgId) {
        Organization organization = organizationRepository.findById(orgId).orElseThrow(
                ()-> new ResourceNotFoundException("Organization does not exist with the given id: " + orgId));
        return OrganizationMapper.mapToOrganizationDto(organization);
    }

    @Override
    public List<OrganizationDto> getAllOrganizations() {
        List<Organization> organizations = organizationRepository.findAll();
        return organizations.stream().map(OrganizationMapper::mapToOrganizationDto).collect(Collectors.toList());
    }

    @Override
    public OrganizationDto updateOrganization(Long orgId, OrganizationDto updatedOrganization) {
        Organization organization = organizationRepository.findById(orgId).orElseThrow(
                () -> new ResourceNotFoundException("Organization does not exist with the given id: " + orgId));
        organization.setContactNumbers(updatedOrganization.getContactNumbers());
        organization.setOrgName(updatedOrganization.getOrgName());
        organization.setNid(updatedOrganization.getNid());
        organization.setDescription(updatedOrganization.getDescription());
        organization.setLocation(updatedOrganization.getLocation());
        organization.setOrgImage(updatedOrganization.getOrgImage());

        Organization updatedOrganizationObj = organizationRepository.save(organization);

        return OrganizationMapper.mapToOrganizationDto(updatedOrganizationObj);
    }

    @Override
    public void deleteOrganization(Long orgId) {
        Organization organization = organizationRepository.findById(orgId).orElseThrow(
                () -> new ResourceNotFoundException("Organization does not exist with the given id: " + orgId)
        );
        organizationRepository.deleteById(orgId);
    }
}
