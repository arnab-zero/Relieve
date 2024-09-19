package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShelterInhabitantDto {

    private Long siId;
    private String name;
    private Long contact;
    private int totalMember;
    private int numberOfMale;
    private int numberOfFemale;
    private int numberOfChild;
    private String religion;
    private Long shelterId;
    private String remarks;
}
