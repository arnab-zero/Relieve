package com.lannister.relieve_backend.dto;


import jakarta.persistence.Column;
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

public class VolunteerRequestDto {
    private Long requestId;
    private Long userId;
    private Long eventId;
    private String eventName;
    private Long vcId;
    private String comment;
    private LocalDateTime createdAt;
    private boolean isApproved;
}
