package com.bluepact.backend.utils;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class CommonUtils {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	public String sendOtp(String email)
	{
		String otp = CommonUtils.generateOtp();
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(email);
		mailMessage.setSubject("Your OTP for Login");
		mailMessage.setText("Your Otp to login is: " + otp);
		mailMessage.setFrom("rvshervin@gmail.com");
		javaMailSender.send(mailMessage);
		return otp;
	}

	private static String generateOtp() {
	    Random random = new Random();
	    int otp = 1000 + random.nextInt(9000);
	    return String.valueOf(otp);
	}
}
