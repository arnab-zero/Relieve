package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donationId;
    @Column(name = "donation_call_id")
    private Long donationCallId;
    @Column(name = "event_id")
    private Long eventId;
    @Column(name = "received_at")
    private LocalDateTime receivedAt;
    @Column(name = "amount")
    private Double amount;
    @Column(name = "description")
    private String description;
}
