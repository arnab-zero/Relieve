package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.FoodDto;
import com.lannister.relieve_backend.entity.Food;

public class FoodMapper {

    public static FoodDto mapToFoodDto(Food food) {
        return new FoodDto(
                food.getFoodId(),
                food.getItem(),
                food.getQuantity(),
                food.getDonorName(),
                food.getDonorContact(),
                food.getType(),
                food.getDate(),
                food.getShelterId()
        );
    }

    public static Food mapToFood(FoodDto foodDto) {
        return new Food(
                foodDto.getFoodId(),
                foodDto.getItem(),
                foodDto.getQuantity(),
                foodDto.getDonorName(),
                foodDto.getDonorContact(),
                foodDto.getType(),
                foodDto.getDate(),
                foodDto.getShelterId()
        );
    }
}
