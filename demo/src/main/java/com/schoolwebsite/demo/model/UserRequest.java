/*
    a class that represents the data entered by a user request
*/

package com.schoolwebsite.demo.model;

public class UserRequest {
    private String name;
    private String email;

    public UserRequest(String name, String email)
    {
        this.name = name;
        this.email = email;
    }
    
    public String getName()
    {
        return this.name;
    }

    public String getEmail()
    {
        return this.email;
    }
}
