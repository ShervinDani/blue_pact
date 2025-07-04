package com.bluepact.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluepact.backend.entity.UserEntity;
import com.bluepact.backend.repository.UserRepository;
import com.bluepact.backend.utils.CommonUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class LoginService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CommonUtils commonUtils;
	
	public String sendOtp(String email)
	{
		Optional<UserEntity> userEntity = userRepository.findByUserEmail(email);
		if(userEntity.isPresent())
		{
			return commonUtils.sendOtp(email);
		}
		else
		{
			return "User Not Found";
		}
	}

	public String sendSignUpOtp(String email) {
		return commonUtils.sendOtp(email);
	}
	
}
