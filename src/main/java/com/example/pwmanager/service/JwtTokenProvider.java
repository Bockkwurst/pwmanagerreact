package com.example.pwmanager.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class JwtTokenProvider {

    @org.springframework.beans.factory.annotation.Value("${app.jwt.ext}")
    private Long expiration;


    public String generateToken(UserDetails userDetails) throws NoSuchAlgorithmException {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expiration);

        String secret = SecretKeyGenerator.generateSecretKey(userDetails.getPassword());
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }

}
