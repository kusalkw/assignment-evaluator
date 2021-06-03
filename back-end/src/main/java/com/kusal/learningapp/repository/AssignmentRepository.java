package com.kusal.learningapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kusal.learningapp.model.Assignment;
import com.kusal.learningapp.model.User;

@Repository
public interface AssignmentRepository extends MongoRepository<Assignment, String>{
	

}
