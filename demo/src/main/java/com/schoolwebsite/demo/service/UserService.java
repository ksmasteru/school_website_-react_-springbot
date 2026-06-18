package com.schoolwebsite.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.schoolwebsite.demo.exception.UserNotFoundException;
import com.schoolwebsite.demo.model.User;
import com.schoolwebsite.demo.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Business Action: Register a new user but check for duplicates first
    public User registerUser(User user) {
        // Business Rule: Check if email is already taken
        boolean emailExists = userRepository.findByEmail(user.getEmail()).isPresent();
        if (emailExists) {
            throw new IllegalArgumentException("Email is already registered!");
        }
        
        // Save and return the fresh user record
        return userRepository.save(user);
    }

    public User getUserById(Long id)
    {
        return userRepository.findById(id)
                .orElseThrow( () -> new UserNotFoundException("User not found with id : " + id));
    }
    // Business Action: Find a user by email, or throw a clean error if missing
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));
    }

    public User getUserByName(String name)
    {
        return userRepository.findByName(name)
                .orElseThrow(() -> new UserNotFoundException("User not found with name : " + name));
    }

    // Business Action: Get everyone in the database
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // to fix : should throw an exceptionn i user doesnt exist
    public void deleteUser(long id)
    {
        // busines logic : check if user exists
        boolean userExists = userRepository.findById(id).isPresent();
        if (userExists)
            userRepository.deleteById(id);
        else
            throw new UserNotFoundException("User not found");
    }
}