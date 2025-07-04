package com.bluepact.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bluepact.backend.service.LoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("login")
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@GetMapping("userLogin")
	public String userLogin(@RequestParam("email") String email)
	{
		log.info("Otp Controller for Email: " + email);
		return loginService.sendOtp(email);
	}
	
	@GetMapping("userSignup")
	public String userSignUp(@RequestParam("email") String email) {
		return loginService.sendSignUpOtp(email);
	}
	

}
