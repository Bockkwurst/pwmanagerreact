package com.example.pwmanager.service.impl;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.enums.Role;
import com.example.pwmanager.model.UserEntity;
import com.example.pwmanager.repos.UserRepository;
import com.example.pwmanager.responses.RegisterResponse;
import com.example.pwmanager.service.JwtService;
import com.example.pwmanager.service.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RegisterServiceImpl implements RegisterService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;


    public Optional<RegisterResponse> registerUserWithRole(RegisterDto request){
        UserEntity user = new UserEntity();
        user.setUsername(request.getUsername());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);

        String token = jwtService.generateToken(user);

        RegisterResponse registerResponse = new RegisterResponse();
        registerResponse.setUsername(user.getUsername());
        registerResponse.setEmail(user.getEmail());
        registerResponse.setToken(token);
        return Optional.of(registerResponse);
    }
}
