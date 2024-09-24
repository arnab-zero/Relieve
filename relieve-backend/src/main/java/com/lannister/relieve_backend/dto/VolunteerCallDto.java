package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VolunteerCallDto {
    private Long vcId;
    private Long eventId;
    private String title;
    private String description;
    private String location;
    private LocalDateTime deadline;
    private LocalDateTime creationTime;
}
