package com.jeterson.ratemovie.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jeterson.ratemovie.dto.MovieDTO;
import com.jeterson.ratemovie.entities.Movie;
import com.jeterson.ratemovie.repositories.MovieRepository;

@Service
public class MovieService {

	private MovieRepository repository;
	
	public MovieService(MovieRepository movieRepository) {
		this.repository = movieRepository;
	}
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = this.repository.findAll(pageable);
		Page<MovieDTO> page = result.map(movie -> new MovieDTO(movie));		
		return page;		
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie movie = repository.findById(id).orElse(null);
		return new MovieDTO(movie);
	}
}
