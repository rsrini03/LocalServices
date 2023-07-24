package com.neo.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.LocalService;
import com.neo.security.service.LocalServiceImpl;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v4/localservice")
public class LocalServiceController {

	@Autowired

	private LocalServiceImpl serviceImpl;

	@PostMapping("/addservice")
	public Boolean addService(@RequestBody LocalService ls) {
		return serviceImpl.addServic(ls);
	}

	@GetMapping("/get")
	public List<LocalService> getService() {
		return serviceImpl.getAllServices();
	}

	@GetMapping("/get/{id}")
	public LocalService getServiceById(@PathVariable int id) {
		return serviceImpl.getServiceById(id);
	}
}
