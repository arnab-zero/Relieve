package com.lannister.relieve_backend.mapper;

import com.lannister.relieve_backend.dto.UserDto;
import com.lannister.relieve_backend.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getUserId(),
                user.getUserName(),
                user.getContactNumber(),
                user.getEmail(),
                user.getDateOfBirth(),
                user.getLocation(),
                user.getProfession(),
                user.getUserImage(),
                user.getCommunityIds(),
                user.getEventIds(),
                user.getIncidentIds()
        );
    }

    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getUserId(),
                userDto.getUserName(),
                userDto.getContactNumber(),
                userDto.getEmail(),
                userDto.getDateOfBirth(),
                userDto.getLocation(),
                userDto.getProfession(),
                userDto.getUserImage(),
                userDto.getCommunityIds(),
                userDto.getEventIds(),
                userDto.getIncidentIds()
        );
    }
}
