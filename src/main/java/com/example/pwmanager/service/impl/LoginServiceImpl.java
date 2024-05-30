package com.example.pwmanager.service.impl;

import com.example.pwmanager.dtos.LoginDto;
import com.example.pwmanager.model.UserEntity;
import com.example.pwmanager.repos.UserRepository;
import com.example.pwmanager.responses.LoginResponse;
import com.example.pwmanager.service.JwtService;
import com.example.pwmanager.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public Optional<LoginResponse> loginUser(LoginDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        UserEntity user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token = jwtService.generateToken(user);

        LoginResponse loginResponse = new LoginResponse(token);
        return Optional.of(loginResponse);
    }

}
