package com.jeterson.ratemovie.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jeterson.ratemovie.dto.MovieDTO;
import com.jeterson.ratemovie.dto.ScoreDTO;
import com.jeterson.ratemovie.entities.Movie;
import com.jeterson.ratemovie.entities.Score;
import com.jeterson.ratemovie.entities.User;
import com.jeterson.ratemovie.repositories.MovieRepository;
import com.jeterson.ratemovie.repositories.ScoreRepository;
import com.jeterson.ratemovie.repositories.UserRepository;

@Service
public class ScoreService {

	private MovieRepository movieRepository;
	private UserRepository userRepository;
	private ScoreRepository repository;

	public ScoreService(MovieRepository movieRepository, UserRepository userRepository, ScoreRepository repository) {
		this.movieRepository = movieRepository;
		this.userRepository = userRepository;
		this.repository = repository;
	}


	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null)
			user = saveUser(dto.getEmail());

		Movie movie = movieRepository.findById(dto.getMovieId()).orElse(null);
		if(movie == null)
			throw new EntityNotFoundException("Entity movie not found with id " + dto.getMovieId());

		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());

		score = repository.saveAndFlush(score);

		movie = calculateScore(movie);
		
		return new MovieDTO(movie);
	}


	private Movie calculateScore(Movie movie) {
		
		double sum = 0.0;		
		for(Score score: movie.getScores()) {
			sum += score.getValue();

		}
		int size = movie.getScores().size();
		double avg = sum / size;
		movie.setScore(avg);
		movie.setCount(size);
		
		movie = movieRepository.saveAndFlush(movie);
		
		return movie;

	}


	private User saveUser(String email) {
		User user = new User(null, email);
		user = userRepository.saveAndFlush(user);
		return user;

	}
}
