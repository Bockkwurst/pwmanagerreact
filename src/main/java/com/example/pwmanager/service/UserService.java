package com.example.pwmanager.service;


import com.example.pwmanager.responses.TakenResponse;

import java.util.Optional;

public interface UserService {

    public Optional<TakenResponse> checkEmail(String email);
    public Optional<TakenResponse> checkUsername(String username);
}
