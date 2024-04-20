package com.example.pwmanager.service.impl;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.repos.UserRepository;
import com.example.pwmanager.responses.RegisterResponse;
import com.example.pwmanager.service.UserService;
import lombok.RequiredArgsConstructor;
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


        return Optional.empty();
    }


}
