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
public class UserDto {
    private Long userId;
    private String userName;
    private String contactNumber;
    private String email;
    private Date dateOfBirth;
    private String location;
    private String profession;
    private String userImage;
    private Long[] communityIds;
    private Long[] eventIds;
    private Long[] incidentIds;

}
