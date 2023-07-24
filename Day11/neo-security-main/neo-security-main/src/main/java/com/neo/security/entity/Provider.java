package com.neo.security.entity;

import java.sql.Date;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Setter
@Getter
@Entity
public class Provider {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false,unique = true,length = 50)
	
	private String email;
	@Column(nullable = false,length = 64)
	
	private String firstName;
	
	private String lastName;
	
	private String username;

	private String password;
	
	private String location;
	
	private String gender;
	
	private Long phoneNumber;
	
	private String address;
	
	private Date dob;
	
	private String category;
	
	private String charRole;
	
	private String serviceProviding;
	
	private int experience;
	
	private String workingHours;
	
	
	

}
