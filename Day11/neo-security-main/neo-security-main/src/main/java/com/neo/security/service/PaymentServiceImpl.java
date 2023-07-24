package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.neo.security.entity.Payment;
import com.neo.security.repository.PaymentRepository;

public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentRepo;

	@Override
	public Boolean addPayment(Payment payment) {

		return paymentRepo.save(payment) != null ? true : false;
	}

	@Override
	public List<Payment> getPaymentHistory() {
		return paymentRepo.findAll();
	}

	@Override
	public Payment getPaymentById(int id) {
		return paymentRepo.findById(id).get();
	}

}
