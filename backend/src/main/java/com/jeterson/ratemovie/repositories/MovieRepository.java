package com.jeterson.ratemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeterson.ratemovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
