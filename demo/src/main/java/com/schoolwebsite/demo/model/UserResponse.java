package com.schoolwebsite.demo.model;

public class UserResponse {
    private long id;
    private String name;
    private String email;

    // constructor.
    public UserResponse(User user)
    {
        System.out.println("new user added " + user.getEmail());
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
    }

    // mr jackson needs setters and getters to do his job : converting this class to JSON .
    
    public long getId()
    {
        return this.id;
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