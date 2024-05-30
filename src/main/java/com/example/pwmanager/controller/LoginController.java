package com.example.pwmanager.controller;

import com.example.pwmanager.dtos.LoginDto;
import com.example.pwmanager.model.UserEntity;
import com.example.pwmanager.responses.LoginResponse;
import com.example.pwmanager.service.JwtService;
import com.example.pwmanager.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    /*@PostMapping("/login")
    public ResponseEntity<Optional<LoginResponse>> loginUserPost(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(loginService.loginUser(loginDto));

    }*/

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUserPost(@RequestBody LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtService.generateToken((UserEntity) authentication.getPrincipal());
        return ResponseEntity.ok(new LoginResponse(jwt));

    }
}
