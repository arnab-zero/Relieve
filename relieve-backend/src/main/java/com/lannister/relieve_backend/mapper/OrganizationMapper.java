package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.OrganizationDto;
import com.lannister.relieve_backend.entity.Organization;

public class OrganizationMapper {

    public static OrganizationDto mapToOrganizationDto(Organization organization) {
        return new OrganizationDto(
                organization.getOrgId(),
                organization.getOrgName(),
                organization.getDescription(),
                organization.getContactNumbers(),
                organization.getLocation(),
                organization.getOrgImage(),
                organization.getNid(),
                organization.getOngoingEvents(),
                organization.getPastEvents(),
                organization.getUpcomingEvents(),
                organization.getVolunteers()
        );
    }

    public static Organization mapToOrganization(OrganizationDto organizationDto) {
        return new Organization(
                organizationDto.getOrgId(),
                organizationDto.getOrgName(),
                organizationDto.getDescription(),
                organizationDto.getContactNumbers(),
                organizationDto.getLocation(),
                organizationDto.getOrgImage(),
                organizationDto.getNid(),
                organizationDto.getOngoingEvents(),
                organizationDto.getPastEvents(),
                organizationDto.getUpcomingEvents(),
                organizationDto.getVolunteers()
        );
    }
}
