package com.neo.security.service;

import java.awt.print.Printable;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.ThrowableCauseExtractor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.neo.security.entity.Feedback;
import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String addUser(User user) {
		
		String result = "";
		Optional <User> obj = repo.findByEmail(user.getEmail());
		System.out.println(user.toString());
		
		try {
			if(Objects.nonNull(obj)) {
				System.out.println(obj);
				String encodedPassword = passwordEncoder.encode(user.getPassword());
				
				User user1 = User.builder()
						.firstName(user.getFirstName())
						.lastName(user.getLastName())
						.username(user.getUsername())
						.charRole(user.getCharRole())
						.address(user.getAddress())
						.password(encodedPassword)
						.email(user.getEmail())
						.gender(user.getGender())
						.dob(user.getDob())
						.phoneNumber(user.getPhoneNumber())
						.location(user.getLocation()).build();
				
				return repo.save(user1)!=null ? "Successfully Registered!!":"Something went wrong";
			}

		}
		catch (Exception e) {
			result = "Email already exists!!!!";
		}
		
		return result;	
	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}

	public Boolean addfeedback(Feedback feedback) {
	
		WebClient webClient = WebClient.builder().baseUrl("http://localhost:2003").build();
		
		Boolean result = webClient.post().uri("/feedback/add").contentType(MediaType.APPLICATION_JSON)
				.bodyValue(feedback).retrieve().bodyToMono(Boolean.class).block();
		
		return result;
		
	}
	
	

}
