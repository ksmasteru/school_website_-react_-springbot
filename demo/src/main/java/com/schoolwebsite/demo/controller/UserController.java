package com.schoolwebsite.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import com.schoolwebsite.demo.model.User;
import com.schoolwebsite.demo.model.UserResponse;
import com.schoolwebsite.demo.service.UserService;
import com.schoolwebsite.demo.model.UserRequest;
import org.springframework.http.HttpStatus;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }
    
    @GetMapping("/") // get all users
    // does springboot translate any of this to json ?
    public List <UserResponse> getAllUsers()
    {
        List <User> Users = userService.getAllUsers();
        List <UserResponse> usersList = new ArrayList<>();
        for (User user : Users){
            usersList.add(new UserResponse(user));}
        return usersList;
    }
    
    @GetMapping("/id/{id}") // well i have to study how params are passed.
    public UserResponse getUserById(@PathVariable Long id)
    {
        User user =  userService.getUserById(id);
        return new UserResponse(user);
    }
    
    @GetMapping("/name/{name}")
    public UserResponse getUserByName(@PathVariable String name)
    {
        User user = userService.getUserByName(name);
        return new UserResponse(user);
    }
    
    // hna post mapping means adding a new user : we should data from the request
    //and it should most of the time be from the @Bodyparam
    /*POST /users
        Content-Type: application/json
            {
        "name": "Alice",
        "email": "alice@example.com"
        } */
    
    // update return responseEntity with status code 201.
    @PostMapping("/")
    public ResponseEntity<UserResponse> addNewUser(@RequestBody UserRequest user)
    {
        User newUser = new User(user.getName(), user.getEmail());
        User savedUser = userService.registerUser(newUser);
        UserResponse addedUser = new UserResponse(savedUser);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(addedUser);
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id)
    {
        userService.deleteUser(id);
        return ResponseEntity
            .noContent().build();
    }
}
