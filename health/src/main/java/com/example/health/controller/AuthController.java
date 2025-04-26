package com.example.health.controller;

import com.example.health.model.Doctor;
import com.example.health.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private DoctorRepository repo;

    @PostMapping("/signup")
    public String register(@RequestBody Doctor doctor) {
        repo.save(doctor); // ⚠️ Later: Hash password!
        return "Doctor registered!";
    }

    @PostMapping("/login")
    public String login(@RequestBody Doctor doctor) {
        var found = repo.findByEmail(doctor.getEmail());
        if (found.isPresent() && found.get().getPassword().equals(doctor.getPassword())) {
            return "Login successful! (JWT token here)";
        } else {
            return "Invalid credentials!";
        }
    }
}