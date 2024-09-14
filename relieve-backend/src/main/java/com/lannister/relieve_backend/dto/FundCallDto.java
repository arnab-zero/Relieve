package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FundCallDto {
    private Long fundCallId;
    private Long eventId;
    private String title;
    private LocalDateTime createdAt;
    private String description;
    private Double targetAmount;
    private Double receivedAmount;
    private LocalDateTime deadline;
}
