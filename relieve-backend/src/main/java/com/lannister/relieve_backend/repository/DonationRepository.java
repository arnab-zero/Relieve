package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
}
