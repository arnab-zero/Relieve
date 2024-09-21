package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "shelters")
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shelterId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "zilla")
    private String zilla;

    @Column(name = "upazilla")
    private String upazilla;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "contact_numbers")
    private Long[] contactNumbers;

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "current_people", nullable = false)
    private Integer currentPeople;

    @Column(name = "event_id")
    private Long eventId;
}
