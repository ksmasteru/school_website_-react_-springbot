package com.schoolwebsite.demo.model;

public class UserResponse {
    private long Id;
    private String name;
    private String email;

    // constructor.
    public UserResponse(User user)
    {
        System.out.println("new user added " + user.getEmail());
        this.Id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
    }
}