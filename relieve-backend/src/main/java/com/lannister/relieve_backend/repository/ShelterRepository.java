package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShelterRepository extends JpaRepository<Shelter, Long> {
}
