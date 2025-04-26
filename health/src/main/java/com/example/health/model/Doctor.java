package com.example.health.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String email;
    private String password;
    public String getEmail() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getEmail'");
    }
    public Object getPassword() {
        
        throw new UnsupportedOperationException("Unimplemented method 'getPassword'");
    }
}
