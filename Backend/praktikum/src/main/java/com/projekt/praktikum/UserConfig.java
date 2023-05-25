package com.projekt.praktikum;

import com.projekt.praktikum.model.User;
import com.projekt.praktikum.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {
            User john = new User();
            john.setCardNumber("1234567890123456");
            john.setPin("1234");
            john.setAccountBalance(5000);
            john.setAccountNumber("100");
            john.setName("John");

            User alice = new User();
            alice.setCardNumber("2345678901234567");
            alice.setPin("2345");
            alice.setAccountBalance(6000);
            alice.setAccountNumber("101");
            alice.setName("Alice");

            User bob = new User();
            bob.setCardNumber("3456789012345678");
            bob.setPin("3456");
            bob.setAccountBalance(7000);
            bob.setAccountNumber("102");
            bob.setName("Bob");

            User charlie = new User();
            charlie.setCardNumber("4567890123456789");
            charlie.setPin("4567");
            charlie.setAccountBalance(8000);
            charlie.setAccountNumber("103");
            charlie.setName("Charlie");

            User antonio = new User();
            antonio.setCardNumber("4567890123456985");
            antonio.setPin("1111");
            antonio.setAccountBalance(10000);
            antonio.setAccountNumber("104");
            antonio.setName("Antonio");

            User paulo = new User();
            paulo.setCardNumber("1234567899123456");
            paulo.setPin("2222");
            paulo.setAccountBalance(1000);
            paulo.setAccountNumber("105");
            paulo.setName("Paulo");

            userRepository.saveAll(Arrays.asList(john, alice, bob, charlie, antonio, paulo));
        };
    }
}
