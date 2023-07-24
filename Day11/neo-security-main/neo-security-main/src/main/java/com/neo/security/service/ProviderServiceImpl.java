package com.neo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Provider;
import com.neo.security.repository.ProviderRepository;

@Service
public class ProviderServiceImpl implements ProviderService {

	@Autowired
	private ProviderRepository providerrepo;

	@Override
	public Boolean addProvider(Provider provider) {

		return providerrepo.save(provider) != null ? true : false;
	}

	@Override
	public List<Provider> getAllProvider() {
		return providerrepo.findAll();
	}

	@Override
	public Provider getProviderById(int id) {
		return providerrepo.findById(id).get();
	}

	@Override
	public Provider updateProvider(String email, Provider obj) {

		Provider provider = providerrepo.findByEmail(email).get();

		if (Objects.nonNull(provider)) {
			if (obj.getServiceProviding() != null) {
				provider.setServiceProviding(obj.getServiceProviding());
			}

			if (obj.getExperience() != 0) {
				provider.setExperience(obj.getExperience());
			}

			if (obj.getWorkingHours() != null) {
				provider.setWorkingHours(obj.getWorkingHours());
			}
			if (obj.getCategory() != null) {
				provider.setCategory(obj.getCategory());
			}
			return providerrepo.saveAndFlush(provider);
		}
		return null;
	}

	@Override
	public List<Provider> getProviderByLocationCategory(String category, String location) {

		return providerrepo.getProviderByLocationCategory(category, location);
	}

	@Override
	public Provider getProviderByEmail(String email) {
		return providerrepo.findByEmail(email).get();
	}
}
