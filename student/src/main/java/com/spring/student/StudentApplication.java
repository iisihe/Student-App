package com.spring.student;

import com.spring.student.repositories.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudentApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(StudentRepository repo) {
		return (args) -> {
			repo.save(new Student("Olli Opiskelija", "olli.opiskelija@testi.com"));
			repo.save(new Student("Alli Opiskelija", "alli.opiskelija@testi.com"));
			repo.save(new Student("Iitu Opiskelija", "iitu.opiskelija@testi.com"));
		};
	}
}
