package com.neo.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Provider;
import com.neo.security.service.ProviderService;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v4/provider")
public class ProviderController {

	@Autowired

	private ProviderService service;

	@PostMapping("/addprovider")
	public Boolean addProvider(@RequestBody Provider provider) {
		return service.addProvider(provider);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
	}

	@GetMapping("/getprovider")

	public List<Provider> getProvider() {
		return service.getAllProvider();
	}
	
	@GetMapping("/getdetails/{category}/{location}")
	public List<Provider>  getProviderByLocationCategory(@PathVariable String category, @PathVariable String location ) {
		return service.getProviderByLocationCategory(category,location);
	}

	@GetMapping("/getprovider1/{id}")
	public Provider getProviderById(@PathVariable int id) {
		return service.getProviderById(id);
	}
	@GetMapping("/getprovider/{email}")
	public  Provider getProviderByEmail(@PathVariable String email) {
		return service.getProviderByEmail(email);
	}

	@PutMapping("/update/{email}")
	public Provider updateproviderById(@PathVariable String email, @RequestBody Provider provider) {
		return service.updateProvider(email, provider);
	}
	
}
