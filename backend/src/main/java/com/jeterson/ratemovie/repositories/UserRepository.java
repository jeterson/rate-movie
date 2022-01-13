package com.jeterson.ratemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeterson.ratemovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
