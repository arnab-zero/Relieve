package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {
    private Long eventId;
    private Long communityId;
    private String eventName;
    private String description;
    private String[] contacts;
    private Date dateFrom;
    private Date dateTo;
    private String location;
    private Long[] volunteers;
    private Long[] eventAdmins;
    private Long[] volunteerCalls;
    private Long[] donationCalls;
    private Long[] reports;
}
