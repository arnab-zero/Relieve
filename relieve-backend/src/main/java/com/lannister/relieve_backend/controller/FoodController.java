package com.lannister.relieve_backend.controller;

import com.lannister.relieve_backend.dto.FoodDto;
import com.lannister.relieve_backend.service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/food")
public class FoodController {

    private FoodService foodService;

    // Create new Food item
    @PostMapping
    public ResponseEntity<FoodDto> createFood(@RequestBody FoodDto foodDto) {
        FoodDto savedFood = foodService.createFood(foodDto);
        return new ResponseEntity<>(savedFood, HttpStatus.CREATED);
    }

    // Get Food by ID
    @GetMapping("/{foodId}")
    public ResponseEntity<FoodDto> getFoodById(@PathVariable Long foodId) {
        FoodDto foodDto = foodService.getFoodById(foodId);
        return ResponseEntity.ok(foodDto);
    }

    // Get all Food items
    @GetMapping
    public ResponseEntity<List<FoodDto>> getAllFood() {
        List<FoodDto> foodList = foodService.getAllFood();
        return ResponseEntity.ok(foodList);
    }

    // Update Food item
    @PutMapping("/{foodId}")
    public ResponseEntity<FoodDto> updateFood(@PathVariable Long foodId, @RequestBody FoodDto foodDto) {
        FoodDto updatedFood = foodService.updateFood(foodId, foodDto);
        return ResponseEntity.ok(updatedFood);
    }

    // Delete Food item
    @DeleteMapping("/{foodId}")
    public ResponseEntity<String> deleteFood(@PathVariable Long foodId) {
        foodService.deleteFood(foodId);
        return ResponseEntity.ok("Food item deleted successfully.");
    }
}
