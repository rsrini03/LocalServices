package com.neo.security.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.neo.security.entity.Provider;

public interface ProviderRepository  extends JpaRepository<Provider, Integer>{

	Optional<Provider> findByEmail(String email);
	
	@Query(value = "select z from Provider z where z.category = ?1 AND z.location = ?2")
	List<Provider> getProviderByLocationCategory(String category,String location);
	

}
