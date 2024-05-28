package com.example.pwmanager.service;

import com.example.pwmanager.dtos.LoginDto;
import com.example.pwmanager.responses.LoginResponse;

import java.util.Optional;

public interface LoginService {
    Optional<LoginResponse> loginUser(LoginDto loginDto);
}
