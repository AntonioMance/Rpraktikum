package com.projekt.praktikum.controller;

import com.projekt.praktikum.model.User;
import com.projekt.praktikum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class ATMController {

    private final UserRepository userRepository;

    @Autowired
    public ATMController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        Optional<User> foundUser = userRepository.findById(user.getCardNumber());
        if (foundUser.isPresent()) {
            User existingUser = foundUser.get();
            if (existingUser.getPin().equals(user.getPin())) {
                return ResponseEntity.ok("Authenticated successfully");
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect card number or PIN");
    }

    @GetMapping("/balance/{cardNumber}")
    public ResponseEntity<?> getBalance(@PathVariable String cardNumber) {
        Optional<User> foundUser = userRepository.findById(cardNumber);
        if (foundUser.isPresent()) {
            User existingUser = foundUser.get();
            return ResponseEntity.ok(existingUser.getAccountBalance());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }


    @PostMapping("/withdraw/{cardNumber}")
    public ResponseEntity<?> withdrawMoney(@PathVariable String cardNumber, @RequestParam double amount) {
        Optional<User> foundUser = userRepository.findById(cardNumber);
        if (foundUser.isPresent()) {
            User existingUser = foundUser.get();
            double newBalance = existingUser.getAccountBalance() - amount;
            if (newBalance >= 0) {
                existingUser.setAccountBalance(newBalance);
                userRepository.save(existingUser);
                return ResponseEntity.ok("Withdrawal successful. New balance: " + newBalance);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient balance");
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }

    @PostMapping("/deposit/{cardNumber}")
    public ResponseEntity<?> depositMoney(@PathVariable String cardNumber, @RequestParam double amount) {
        Optional<User> foundUser = userRepository.findById(cardNumber);
        if (foundUser.isPresent()) {
            User existingUser = foundUser.get();
            double newBalance = existingUser.getAccountBalance() + amount;
            existingUser.setAccountBalance(newBalance);
            userRepository.save(existingUser);
            return ResponseEntity.ok("Deposit successful. New balance: " + newBalance);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }

    @GetMapping("/profile/{cardNumber}")
    public ResponseEntity<?> getUserProfile(@PathVariable String cardNumber) {
        Optional<User> foundUser = userRepository.findById(cardNumber);
        if (foundUser.isPresent()) {
            User existingUser = foundUser.get();
            return ResponseEntity.ok(existingUser);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }



}
