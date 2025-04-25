package com.example.health.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class TestController {
    @GetMapping("/health")
    public String healthCheck() {
        return "Backend is running!";
    }
    @GetMapping("/test")
    public String testConnection() {
        return "Backend is connected!";
    }
}