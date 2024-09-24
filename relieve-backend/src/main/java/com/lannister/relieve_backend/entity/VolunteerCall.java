package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "volunteer_calls")
public class VolunteerCall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vcId;

    @Column(name = "event_id")
    private Long eventId;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "location")
    private String location;

    @Column(name = "deadline")
    private LocalDateTime deadline;

    @Column(name = "creation_time", nullable = false, updatable = false)
    private LocalDateTime creationTime;
}
