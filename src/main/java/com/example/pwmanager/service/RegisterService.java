package com.example.pwmanager.service;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.responses.RegisterResponse;

import java.util.Optional;

public interface RegisterService {
    Optional<RegisterResponse> registerUserWithRole(RegisterDto registerDto);
}
