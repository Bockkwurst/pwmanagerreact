package com.example.pwmanager.controller;

import com.example.pwmanager.dtos.LoginDto;
import com.example.pwmanager.responses.LoginResponse;
import com.example.pwmanager.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Optional<LoginResponse>> loginUserPost(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(loginService.loginUser(loginDto));

    }
}
