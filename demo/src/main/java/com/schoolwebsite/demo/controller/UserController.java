package com.schoolwebsite.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.schoolwebsite.demo.service.UserService;


@RestController
@RequesMapping("/users")
public class UserController {

    private final UserService UserService;

    public UserController(UserService userService)
    {
        this.UserService = userService;
    }
    @GetMapping("/user")
    public string getUsers()
    {

    }
}
