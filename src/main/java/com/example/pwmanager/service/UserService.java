package com.example.pwmanager.service;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.responses.RegisterResponse;
import com.example.pwmanager.responses.TakenResponse;

import java.util.Optional;

public interface UserService {

    public Optional<RegisterResponse> registerUserWithRole(RegisterDto registerDto);
    public Optional<TakenResponse> checkEmail(String email);
    public Optional<TakenResponse> checkUsername(String username);
}
