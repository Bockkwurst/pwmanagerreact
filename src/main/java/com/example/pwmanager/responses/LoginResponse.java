package com.example.pwmanager.responses;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class LoginResponse {

    private String username;
    private String password;
    @NonNull
    private String token;

}
