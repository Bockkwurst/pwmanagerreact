package com.example.pwmanager.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class PasswordEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(length = 50)
    private String userNameEmail;

    @NonNull
    @Column(length = 50)
    private String serviceName;

    @NonNull
    @Column(length = 50)
    private String password;

    @Column(length = 1000)
    private String notes;

    @NonNull
    private boolean active;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

}
