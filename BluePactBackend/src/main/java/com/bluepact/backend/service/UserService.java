package com.bluepact.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bluepact.backend.entity.UserEntity;
import com.bluepact.backend.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public ResponseEntity<UserEntity> addUser(UserEntity newUser) {
		Optional<UserEntity> userEntity = userRepository.findByUserEmail(newUser.getUserEmail());
		if (userEntity.isPresent()) {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		userRepository.save(newUser);
		return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
	}

	public ResponseEntity<UserEntity> getUser(String email) {
		Optional<UserEntity> userEntity = userRepository.findByUserEmail(email);
		if (!userEntity.isPresent()) {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(userEntity.get());
	}

}
