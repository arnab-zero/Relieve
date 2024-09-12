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
    private String description;
    private Long[] contactNumbers;
    private String location;
    private String orgImage;
    private String[] nid;
}
