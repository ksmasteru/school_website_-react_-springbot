/*
    a class that represents the data entered by a user request
*/
// update data validation.
package com.schoolwebsite.demo.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
public class UserRequest {
    @NotBlank(message = "Name cannot be empty")
    private String name;
    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Email must be valid")
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
