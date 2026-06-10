package com.schoolwebsite.demo.exception;

import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
public class ErrorFormat{
    // timestamp
    private LocalDateTime timeStamp;
    private String message;
    private String details;
    private List<String> Errors;

    public ErrorFormat(LocalDateTime time, String message, String details){
        this. timeStamp = time;
        this.message = message;
        this.details = details;
        this.Errors = new ArrayList<>();
    }

    public ErrorFormat(LocalDateTime time, String message, String details, List<String> Errors){
        this. timeStamp = time;
        this.message = message;
        this.details = details;
        this.Errors = Errors;
    }
    
    public String getMessage()
    {
        return this.message;
    }

    public String getdetails()
    {
        return this.details;
    }

    public LocalDateTime getTimestap()
    {
        return this.timeStamp;
    }

    public String getErrors()
    {
        return this.Errors;
    }
}