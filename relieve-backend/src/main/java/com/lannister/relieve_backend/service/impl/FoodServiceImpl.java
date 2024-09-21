package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.FoodDto;
import com.lannister.relieve_backend.entity.Food;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.FoodMapper;
import com.lannister.relieve_backend.repository.FoodRepository;
import com.lannister.relieve_backend.service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;

    @Override
    public FoodDto createFood(FoodDto foodDto) {
        Food food = FoodMapper.mapToFood(foodDto);
        Food savedFood = foodRepository.save(food);
        return FoodMapper.mapToFoodDto(savedFood);
    }

    @Override
    public FoodDto getFoodById(Long foodId) {
        Food food = foodRepository.findById(foodId)
                .orElseThrow(() -> new ResourceNotFoundException("Food item not found with id: " + foodId));
        return FoodMapper.mapToFoodDto(food);
    }

    @Override
    public List<FoodDto> getAllFood() {
        List<Food> foodList = foodRepository.findAll();
        return foodList.stream()
                .map(FoodMapper::mapToFoodDto)
                .collect(Collectors.toList());
    }

    @Override
    public FoodDto updateFood(Long foodId, FoodDto foodDto) {
        Food food = foodRepository.findById(foodId)
                .orElseThrow(() -> new ResourceNotFoundException("Food item not found with id: " + foodId));

        food.setItem(foodDto.getItem());
        food.setQuantity(foodDto.getQuantity());
        food.setDonorName(foodDto.getDonorName());
        food.setDonorContact(foodDto.getDonorContact());
        food.setType(foodDto.getType());
        food.setDate(foodDto.getDate());
        food.setShelterId(foodDto.getShelterId());

        Food updatedFood = foodRepository.save(food);
        return FoodMapper.mapToFoodDto(updatedFood);
    }

    @Override
    public void deleteFood(Long foodId) {
        Food food = foodRepository.findById(foodId)
                .orElseThrow(() -> new ResourceNotFoundException("Food item not found with id: " + foodId));
        foodRepository.deleteById(foodId);
    }
}
