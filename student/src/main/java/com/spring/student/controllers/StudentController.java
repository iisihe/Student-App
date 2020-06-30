package com.spring.student.controllers;

import com.spring.student.Student;
import com.spring.student.repositories.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return (List<Student>) studentRepository.findAll();
    }

    @GetMapping("/students/{id}")
    public Student getStudent(@PathVariable long id) {
        return studentRepository.findById(id);
    }

    @PutMapping("/students/{id}")
    void updateStudent(@PathVariable long id, @RequestBody Student student) { studentRepository.save(student); }

    @PostMapping("/students")
    void addStudent(@RequestBody Student student) {
        studentRepository.save(student);
    }

    @DeleteMapping("/students/{id}")
    public String delete(@PathVariable long id) {

        Student student = studentRepository.findById(id);
        if (student != null) {
            studentRepository.delete(student);
            return "Student deleted with id " + id;
        }

        return "Could not find student with id " + id;
    }
}
