package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShelterDto {
    private Long shelterId;
    private String name;
    private String imageUrl;
    private String zilla;
    private String upazilla;
    private String location;
    private Long[] contactNumbers;
    private Integer capacity;
    private Integer currentPeople;
    private Long eventId;
}
