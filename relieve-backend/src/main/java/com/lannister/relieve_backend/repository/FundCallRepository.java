package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.FundCall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundCallRepository extends JpaRepository<FundCall, Long> {
}
