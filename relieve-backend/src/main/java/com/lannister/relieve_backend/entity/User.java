package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "user_name")
    private String userName;
    @Column(name = "contact_number")
    private String contactNumber;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "date_of_birth")
    private Date dateOfBirth;
    @Column(name = "location")
    private String location;
    @Column(name = "profession")
    private String profession;
    @Column(name = "user_image")
    private String userImage;
    @Column(name = "community_ids")
    private Long[] communityIds;
    @Column(name = "event_ids")
    private Long[] eventIds;
    @Column(name = "incident_ids")
    private Long[] incidentIds;
}
