package com.bluepact.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bluepact.backend.entity.UserEntity;
import com.bluepact.backend.service.UserService;

@RequestMapping("user")
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("newUser")
	public ResponseEntity<UserEntity> addUser(@RequestBody UserEntity newUser) {
		return userService.addUser(newUser);
	}
	
	@GetMapping("getUser")
	public ResponseEntity<UserEntity> getUser(@RequestParam String email)
	{
		return userService.getUser(email);
	}

}
