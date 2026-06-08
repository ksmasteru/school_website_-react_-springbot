package com.schoolwebsite.demo.exception;

public class UserNotFoundException extends RuntimeException{
        // Default constructor
        public UserNotFoundException() {
            super();
        }
    
        // Constructor that accepts a custom error message
        public UserNotFoundException(String message) {
            super(message);
        }
    
        // Constructor that accepts a message and the original cause (exception chaining)
        public UserNotFoundException(String message, Throwable cause) {
            super(message, cause);
        }
}
