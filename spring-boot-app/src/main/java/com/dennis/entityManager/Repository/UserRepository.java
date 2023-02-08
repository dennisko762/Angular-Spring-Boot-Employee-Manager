package com.dennis.entityManager.Repository;

import com.dennis.entityManager.Entity.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
