package com.example.pwmanager.controller;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.responses.RegisterResponse;
import com.example.pwmanager.responses.TakenResponse;
import com.example.pwmanager.service.JwtService;
import com.example.pwmanager.service.RegisterService;
import com.example.pwmanager.service.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@Getter
@Setter
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class RegisterController {

    private final RegisterService registerService;
    private final UserService userService;
    private final JwtService jwtService;

   /* @PostMapping("/register")
    public ResponseEntity<RegisterResponse> registerUser(@RequestBody RegisterDto registerDto) {
        return registerService.registerUserWithRole(registerDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }*/

    @PostMapping("/register")
    public ResponseEntity<Optional<RegisterResponse>> registerUserPost(@RequestBody RegisterDto registerDto) {
        return ResponseEntity.ok(registerService.registerUserWithRole(registerDto));
    }

    @GetMapping("/check-email/{email}")
    public ResponseEntity<TakenResponse> checkEmail(@PathVariable String email) {
        return userService.checkEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/check-username/{username}")
    public ResponseEntity<TakenResponse> checkUsername(@PathVariable String username) {
        return userService.checkUsername(username)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
}
