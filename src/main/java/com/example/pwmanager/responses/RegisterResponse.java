package com.example.pwmanager.responses;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class RegisterResponse {

    private String username;
    private String email;
    private String token;

}
