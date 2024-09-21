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
@Table(name = "organization")

public class Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orgId;

    @Column(name = "org_name")
    private String orgName;
    @Column(name = "description")
    private String description;
    @Column(name = "contact_numbers")
    private Long[] contactNumbers;
    @Column(name = "location")
    private String location;
    @Column(name = "org_image")
    private String orgImage;
    @Column(name = "nid", nullable = false)
    private String[] nid;
    @Column(name="ongoing_events")
    private Long[] ongoingEvents;
    @Column(name="past_events")
    private Long[] pastEvents;
    @Column(name="upcoming_events")
    private Long[] upcomingEvents;
    @Column(name="volunteers")
    private Long[] volunteers;
}
