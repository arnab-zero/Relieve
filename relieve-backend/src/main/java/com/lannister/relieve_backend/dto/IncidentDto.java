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
public class IncidentDto {

    private Long incidentId;
    private Long userId;
    private Long[] eventId;
    private String updateDetail;
    private String location;
    private String upazilla;
    private String zilla;
    private String contact;
    private String requestType;
    private String mapLink;
    private String status;
    private boolean isVerified;
    private LocalDateTime postedAt;
    private LocalDateTime lastUpdatedAt;
    private String description;

}
