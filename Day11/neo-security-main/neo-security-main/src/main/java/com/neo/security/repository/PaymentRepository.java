package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
