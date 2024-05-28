package com.example.pwmanager.controller;

import com.example.pwmanager.dtos.RegisterDto;
import com.example.pwmanager.responses.RegisterResponse;
import com.example.pwmanager.responses.TakenResponse;
import com.example.pwmanager.service.RegisterService;
import com.example.pwmanager.service.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Getter
@Setter
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {


}
