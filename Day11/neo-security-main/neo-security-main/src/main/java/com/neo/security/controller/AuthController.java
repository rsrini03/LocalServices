package com.neo.security.controller;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Provider;
import com.neo.security.entity.User;
import com.neo.security.repository.ProviderRepository;
import com.neo.security.request.AuthRequest;
import com.neo.security.response.AuthResponse;
import com.neo.security.service.UserServiceImpl;
import com.neo.security.util.JwtUtil;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

	private final AuthenticationManager authenticationManager;
	private final JwtUtil jwtUtil;
	

	private final UserServiceImpl service;
	
	
	private final ProviderRepository repo;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request){
		try {
			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
			User user = (User) authentication.getPrincipal();
			
//			String accessToken = "JWT token !!!!";
			String accessToken = jwtUtil.generateToken(user);
			AuthResponse response = new AuthResponse(user.getEmail(), accessToken);
			
			return ResponseEntity.status(HttpStatus.OK).body(response);
		}catch (BadCredentialsException e) {
			return ResponseEntity.badRequest().body("Login failed");
		}
	}
	
	
	@PostMapping("/register")
	public String register(@RequestBody @Valid User obj) {

		if (obj.getCharRole().equals("service")) {
			Provider provider = Provider.builder()
					.firstName(obj.getFirstName())
					.lastName(obj.getLastName())
					.dob(obj.getDob())
					.charRole(obj.getCharRole())
					.address(obj.getAddress())
					.email(obj.getEmail())
					.password(obj.getPassword())
					.gender(obj.getGender())
					.phoneNumber(obj.getPhoneNumber())
					.username(obj.getUsername())
					.location(obj.getLocation()).build();
			
			repo.save(provider);
			return service.addUser(obj);
		}

		return service.addUser(obj);
	}
}
