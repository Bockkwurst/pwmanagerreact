package com.example.pwmanager.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class RoleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private boolean admin;

    @NonNull
    private boolean user;

    @ManyToMany(
            mappedBy = "roles"
    )
    private Set<UserEntity> users;

}
