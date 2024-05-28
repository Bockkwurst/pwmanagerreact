package com.example.pwmanager.service.impl;

import com.example.pwmanager.repos.UserRepository;
import com.example.pwmanager.responses.TakenResponse;
import com.example.pwmanager.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


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
