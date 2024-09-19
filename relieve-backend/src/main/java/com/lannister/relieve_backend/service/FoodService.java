package com.lannister.relieve_backend.service;

import com.lannister.relieve_backend.dto.FoodDto;

import java.util.List;

public interface FoodService {
    FoodDto createFood(FoodDto foodDto);
    FoodDto getFoodById(Long foodId);
    List<FoodDto> getAllFood();
    FoodDto updateFood(Long foodId, FoodDto foodDto);
    void deleteFood(Long foodId);
}
