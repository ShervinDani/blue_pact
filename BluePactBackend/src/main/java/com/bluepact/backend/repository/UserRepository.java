package com.bluepact.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bluepact.backend.entity.UserEntity;


@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer>{
	public Optional<UserEntity> findByUserEmail(String userEmail);
}
