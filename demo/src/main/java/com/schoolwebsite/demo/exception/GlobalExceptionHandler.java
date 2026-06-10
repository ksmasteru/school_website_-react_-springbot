package com.schoolwebsite.demo.exception;

import com.schoolwebsite.demo.exception.ErrorFormat;
// this handles all the exception coming from various spring components.
// it has to be annotated and be accompagned by RETURNED DATA FORMAT.

import com.schoolwebsite.demo.exception.UserNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.method.annotation.HandlerMethodValidationException;


@RestControllerAdvice
public class GlobalExceptionHandler {

    // handling the custom exception we made
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorFormat> handleUserNotFoundException(
        UserNotFoundException ex, WebRequest request) {
    
    ErrorFormat errorFormat = new ErrorFormat(
            LocalDateTime.now(), 
            ex.getMessage(), 
            request.getDescription(false)
    );
    return new ResponseEntity<>(errorFormat, HttpStatus.NOT_FOUND);
}

    //handling standard java expcetion
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorFormat> handleIllegalArgumentException(
        IllegalArgumentException ex, WebRequest request)
        {
            ErrorFormat errorFormat = new ErrorFormat(
                LocalDateTime.now(),
                ex.getMessage(),
                request.getDescription(false)
            );
            return new ResponseEntity<>(errorFormat, HttpStatus.BAD_REQUEST);
        }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorFormat> handleMethodValidationException(
        MethodArgumentNotValidException ex, WebRequest request)
    {

        // going to make custom errors
        String Message = new String("Validation failed");
        List<String> Errors = new ArrayList<>;
        ErrorFormat errorFormat = new ErrorFormat(
            LocalDateTime.now(),
            ex.getMessage(),
            request.getDescription(false)
        );
        return new ResponseEntity<>(errorFormat, HttpStatus.BAD_REQUEST);
    }
    // handling non coverd exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorFormat> handleException(
        Exception ex, WebRequest request)
    {
        ErrorFormat errorFormat = new ErrorFormat(
             LocalDateTime.now(),
             ex.getMessage(),
             request.getDescription(false)
        );
        return new ResponseEntity<>(errorFormat, HttpStatus.INTERNAL_SERVER_ERROR);
    }      
}
