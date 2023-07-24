package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.LocalService;
import com.neo.security.repository.LocalServiceRepository;
@Service

public class LocalServiceImpl implements LocalServiceService {

	@Autowired
	private LocalServiceRepository localrepo;

	@Override
	public Boolean addServic(LocalService ls) {
		
		return localrepo.save(ls)!=null?true:false;
	}

	@Override
	public List<LocalService> getAllServices() {
		
		return localrepo.findAll();
	}

	@Override
	public LocalService getServiceById(int id) {
		return localrepo.findById(id).get();
	}

	
	
	
	
	
	
}
