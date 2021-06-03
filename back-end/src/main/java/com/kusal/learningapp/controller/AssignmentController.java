package com.kusal.learningapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kusal.learningapp.model.Assignment;
import com.kusal.learningapp.model.User;
import com.kusal.learningapp.repository.AssignmentRepository;

@RestController
public class AssignmentController {
	
	@Autowired
	private AssignmentRepository assignmentRepository;
	
	@PostMapping("/create")
	public void createAssignment(@RequestBody Assignment assignment ) {
		assignmentRepository.insert(assignment);
		
	}
	
	@PostMapping("/edit")
	public void editAssignment() {
		
	}
	
	@PostMapping("/delete/{id}")
	public void deleteAssignment(@PathVariable String id) {
		assignmentRepository.deleteById(id);
		
	}
	
	@GetMapping("/list")
	public List<Assignment> listAssignment() {
		return assignmentRepository.findAll();
	}

}
