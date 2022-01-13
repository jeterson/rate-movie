package com.jeterson.ratemovie.controllers;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeterson.ratemovie.dto.MovieDTO;
import com.jeterson.ratemovie.dto.ScoreDTO;
import com.jeterson.ratemovie.services.ScoreService;

@RestController
@RequestMapping("/scores")
public class ScoreController {
	
	private ScoreService service;

	public ScoreController(ScoreService service) {
		this.service = service;
	}
		
	@PutMapping()
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		return service.saveScore(dto);
	}
	
	
}
