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
@Table(name = "shelter_inhabitants")
public class RequestedShelterInhabitant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long siId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "contact", nullable = false)
    private Long contact;

    @Column(name = "total_member", nullable = false)
    private int totalMember;

    @Column(name = "number_of_male", nullable = false)
    private int numberOfMale;

    @Column(name = "number_of_female", nullable = false)
    private int numberOfFemale;

    @Column(name = "number_of_child", nullable = false)
    private int numberOfChild;

    @Column(name = "religion", nullable = false)
    private String religion;

    @Column(name = "shelter_id", nullable = false)
    private Long shelterId;

    @Column(name = "remarks")
    private String remarks;
}
