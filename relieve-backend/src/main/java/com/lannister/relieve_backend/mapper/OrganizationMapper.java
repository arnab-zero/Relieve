package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.OrganizationDto;
import com.lannister.relieve_backend.entity.Organization;

public class OrganizationMapper {

    public static OrganizationDto mapToOrganizationDto(Organization organization) {
        return new OrganizationDto(
                organization.getOrgId(),
                organization.getDescription(),
                organization.getContactNumbers(),
                organization.getLocation(),
                organization.getOrgImage(),
                organization.getNid()

        );
    }

    public static Organization mapToOrganization(OrganizationDto organizationDto) {
        return new Organization(
                organizationDto.getOrgId(),
                organizationDto.getDescription(),
                organizationDto.getContactNumbers(),
                organizationDto.getLocation(),
                organizationDto.getOrgImage(),
                organizationDto.getNid()
        );
    }
}
