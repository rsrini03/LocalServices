package com.neo.security.service;

import com.neo.security.entity.Payment;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface PaymentService {

	Boolean addPayment(Payment pay);
	
	List<Payment> getPaymentHistory();
	
	Payment getPaymentById(int id);
	
}
