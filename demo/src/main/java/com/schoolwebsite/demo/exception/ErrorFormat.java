package com.schoolwebsite.demo.exception;

import java.time.LocalDateTime;

public class ErrorFormat{
    // timestamp
    private LocalDateTime timeStamp;
    private String message;
    private String details;

    public ErrorFormat(LocalDateTime time, String message, String details){
        this. timeStamp = time;
        this.message = message;
        this.details = details;
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
}