package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.VolunteerRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VolunteerRequestRepository extends JpaRepository<VolunteerRequest, Long> {
}
