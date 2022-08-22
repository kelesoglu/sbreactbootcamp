package com.example.sbreactbootcamp.users.controller;

import com.example.sbreactbootcamp.users.model.User;
import com.example.sbreactbootcamp.users.repositories.IUserRepository;
import com.example.sbreactbootcamp.utils.response.R;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
@Tag(name="default")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    IUserRepository userRepository;

    @Operation(summary = "Create a new user")
    @PostMapping
    public R<User> addUser(@RequestBody User user){
        try {
            userRepository.save(user);
        }catch (Exception e)
        {
            logger.error("Creates a new user fails :"+ e.getMessage());
        }
        return new R<User>().success();
    }

    @Operation(summary = "Update and existing user.")
    @PutMapping
    public R<User> updateUser(@Parameter(description = "Update and existing user.")@RequestBody User user){
        try{
            userRepository.save(user);
        }catch (Exception e){
            logger.error("Update an existing user fails:" +e.getMessage());
        }

        return new R<User>().success();
    }
    @Operation(summary = "Retrieve an existing user.")
    @GetMapping("/{email}")
    public R<User> findUserByEmail(@Parameter(description = "A User's email")@PathVariable String email){
        User user =null;

        try{
           user =userRepository.findById(email).orElse(new User());
        }catch (Exception e){
            logger.error("Retrieve an existing user fails:" +e.getMessage());
        }
        return new R<User>().success();
    }
    //@Transactional(readOnly = true)
    @Operation(summary = "Delete an existing user.")
    @DeleteMapping(value="/{email}")
    public R<User> deleteUser(@Parameter(description = "Delete an existing user.")@PathVariable final String email){

        try{
            userRepository.deleteById(email);
        }catch (Exception e){
            logger.error("Delete an existing user fails:" +e.getMessage());
        }
        return new R<User>().success();
    }
    @Operation(summary = "Find the user list")
    @GetMapping("")
    @ResponseBody
    public R<List<User>> findUsers(){
        List<User> userList =null;
        try{
            userList=userRepository.findAll();
        }catch (Exception e){
            logger.error("Find the user list fails"+e.getMessage());
        }
        return new R<List<User>>().success().data(userList);
    }
}
