package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.LocalService;



public interface LocalServiceService {

	Boolean addServic (LocalService ls);
	
	List<LocalService> getAllServices();
	
	LocalService getServiceById(int id);
	
}
