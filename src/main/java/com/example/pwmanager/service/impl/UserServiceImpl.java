package com.example.pwmanager.service.impl;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.repos.UserRepository;
import com.example.pwmanager.responses.RegisterResponse;
import com.example.pwmanager.responses.TakenResponse;
import com.example.pwmanager.service.UserService;
import lombok.RequiredArgsConstructor;
import com.example.pwmanager.model.UserEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Optional<RegisterResponse> registerUserWithRole(RegisterDto registerDto) {

        if (userRepository.existsByUsername(registerDto.getUsername()) || userRepository.existsByEmail(registerDto.getEmail())) {
            return Optional.empty();
        }
        UserEntity user = new UserEntity();
        user.setFirstName(registerDto.getFirstName());
        user.setLastName(registerDto.getLastName());
        user.setUsername(registerDto.getEmail());
        user.setEmail(registerDto.getEmail());
        user.setPassword(registerDto.getPassword());
        userRepository.save(user);

        RegisterResponse registerResponse = new RegisterResponse();
        registerResponse.setUsername(user.getUsername());
        registerResponse.setEmail(user.getEmail());
        return Optional.of(registerResponse);
    }

    public Optional<TakenResponse> checkEmail(String email) {

        boolean isTaken = userRepository.existsByEmail(email);

        TakenResponse takenResponse = new TakenResponse();
        takenResponse.setTaken(isTaken);
        return Optional.of(takenResponse);
    }

    public Optional<TakenResponse> checkUsername(String username) {

        boolean isTaken = userRepository.existsByUsername(username);

        TakenResponse takenResponse = new TakenResponse();
        takenResponse.setTaken(isTaken);
        return Optional.of(takenResponse);
    }

}
