package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import com.neo.security.entity.Provider;

public interface ProviderService {
	
	Boolean addProvider(Provider provider);

	List<Provider> getAllProvider();
	
	Provider getProviderById(int id);
	
	Provider updateProvider(String email,Provider provider);
	
	List<Provider> getProviderByLocationCategory(String category,String location);

	Provider getProviderByEmail(String email);

}
