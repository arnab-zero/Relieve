package com.lannister.relieve_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "FundCall")
public class FundCall {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fundCallId;

    @Column(name = "event_id")
    private Long eventId;
    @Column(name = "title")
    private String title;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "description")
    private String description;
    @Column(name = "target_amount")
    private Double targetAmount;
    @Column(name = "received_amount")
    private Double receivedAmount;
    @Column(name = "deadline")
    private LocalDateTime deadline;
}
