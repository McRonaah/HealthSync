package com.example.health.service;

import com.example.health.model.Program;
import com.example.health.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgramService {

    @Autowired
    private ProgramRepository programRepository;

    public Program createProgram(Program program) {
        return programRepository.save(program);
    }

    public List<Program> getAllPrograms() {
        return programRepository.findAll();
    }
}