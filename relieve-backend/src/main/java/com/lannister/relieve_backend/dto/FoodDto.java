package com.lannister.relieve_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FoodDto {
    private Long foodId;
    private String item;
    private Integer quantity;
    private String donorName;
    private String donorContact;
    private String type;
    private Date date;
}
