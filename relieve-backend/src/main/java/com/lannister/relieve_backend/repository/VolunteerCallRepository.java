package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.VolunteerCall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VolunteerCallRepository extends JpaRepository<VolunteerCall, Long> {
}
