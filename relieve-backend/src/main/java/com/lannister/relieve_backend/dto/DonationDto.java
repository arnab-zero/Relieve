package com.lannister.relieve_backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DonationDto {
    private Long donationId;
    private Long donationCallId;
    private Long eventId;
    private LocalDateTime receivedAt;
    private Double amount;
    private String description;
}
