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

    @Column(name = "description")
    private String description;
    @Column(name = "contact-numbers")
    private Long[] contactNumbers;
    @Column(name = "location")
    private String location;
    @Column(name = "org-image")
    private String orgImage;
    @Column(name = "nid", nullable = false)
    private String[] nid;
}
