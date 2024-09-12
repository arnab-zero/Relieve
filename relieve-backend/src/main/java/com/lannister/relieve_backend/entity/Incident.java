package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "incident")
public class Incident {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long incidentId;
    @Column(name = "userId")
    private Long userId;
    @Column(name = "eventId")
    private Long[] eventId;
    @Column(name = "update_detail")
    private String updateDetail;
    @Column(name = "location")
    private String location;
    @Column(name = "upazilla")
    private String upazilla;
    @Column(name = "zilla")
    private String zilla;
    @Column(name = "contact")
    private String contact;
    @Column(name = "request_type")
    private String requestType;
    @Column(name = "map_link")
    private String mapLink;
    @Column(name = "status")
    private String status;
    @Column(name = "verified")
    private boolean verified;
    @CreationTimestamp
    private LocalDateTime postedAt;
    @CreationTimestamp
    private LocalDateTime lastUpdatedAt;
}
