package com.bluepact.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Table(name = "user_table")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {

	@Id
	private String userId;
	@NonNull
	private String userName;
	private int userAge;
	@Column(unique = true)
	@NonNull
	private String userEmail;
	private boolean isActive;
}
