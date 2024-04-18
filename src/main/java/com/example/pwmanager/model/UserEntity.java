package com.example.pwmanager.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(length = 50, unique = true)
    private String username;

    @NonNull
    @Column(length = 50)
    private String firstName;

    @NonNull
    @Column(length = 50)
    private String lastName;

    @NonNull
    @Column(length = 50, unique = true)
    private String email;

    @NonNull
    @Column(length = 50)
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<RoleEntity> roles;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL
    )
    private Set<PasswordEntity> passwords;

}
