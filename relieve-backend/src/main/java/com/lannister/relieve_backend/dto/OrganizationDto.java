package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrganizationDto {
    private Long orgId;
    private String orgName;
    private String description;
    private String[] contactNumbers;
    private String location;
    private String orgImage;
    private String[] nid;
    private Long[] ongoingEvents;
    private Long[] pastEvents;
    private Long[] upcomingEvents;
    private Long[] volunteers;
}
