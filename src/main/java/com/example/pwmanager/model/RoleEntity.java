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
@Table(name = "role_entity")
public class RoleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "is_admin")
    private boolean admin;

    @Column(name = "is_user_role")
    private boolean user;

    @ManyToMany(
            mappedBy = "roles"
    )
    private Set<UserEntity> users;

}
