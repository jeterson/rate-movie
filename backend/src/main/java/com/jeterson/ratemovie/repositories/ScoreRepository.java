package com.jeterson.ratemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeterson.ratemovie.entities.Score;
import com.jeterson.ratemovie.entities.ScorePK;
import com.jeterson.ratemovie.entities.User;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
