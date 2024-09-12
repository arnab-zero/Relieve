package com.lannister.relieve_backend.service.impl;

import com.lannister.relieve_backend.dto.UserDto;
import com.lannister.relieve_backend.entity.User;
import com.lannister.relieve_backend.exception.ResourceNotFoundException;
import com.lannister.relieve_backend.mapper.UserMapper;
import com.lannister.relieve_backend.repository.UserRepository;
import com.lannister.relieve_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("User does not exist with the given id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {

        List<User> users = userRepository.findAll();

        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User does not exist with the given id: " + userId));

        user.setEmail(updatedUser.getEmail());
        user.setUserImage(updatedUser.getUserImage());
        user.setUserName(updatedUser.getUserName());
        user.setLocation(updatedUser.getLocation());
        user.setContactNumber(updatedUser.getContactNumber());
        user.setProfession(updatedUser.getProfession());
        user.setDateOfBirth(updatedUser.getDateOfBirth());
        user.setCommunityIds(updatedUser.getCommunityIds());
        user.setEventIds(updatedUser.getEventIds());
        user.setIncidentIds(updatedUser.getIncidentIds());

        User updatedUserObj = userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new ResourceNotFoundException("User does not exist with the given id: " + userId));
        userRepository.deleteById(userId);
    }
}
