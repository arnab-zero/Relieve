package com.lannister.relieve_backend.repository;

import com.lannister.relieve_backend.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
