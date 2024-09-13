package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.Incident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
}
