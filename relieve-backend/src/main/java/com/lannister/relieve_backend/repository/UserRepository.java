package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
