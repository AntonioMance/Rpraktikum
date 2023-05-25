package com.projekt.praktikum.service;


import com.projekt.praktikum.model.User;
import com.projekt.praktikum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // Add other necessary methods like addUser, updateUser, deleteUser, etc...
}