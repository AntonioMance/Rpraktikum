package com.projekt.praktikum.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User {

    @Id
    private String cardNumber;
    private String pin;
    private double accountBalance;
    private String name;
    private String accountNumber;
    public User() {
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(double accountBalance) {
        this.accountBalance = accountBalance;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Double.compare(user.accountBalance, accountBalance) == 0 &&
                cardNumber.equals(user.cardNumber) &&
                pin.equals(user.pin) &&
                name.equals(user.name) &&
                accountNumber.equals(user.accountNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cardNumber, pin, accountBalance, name, accountNumber);
    }

    @Override
    public String toString() {
        return "User{" +
                "cardNumber='" + cardNumber + '\'' +
                ", pin='" + pin + '\'' +
                ", accountBalance=" + accountBalance +
                ", name='" + name + '\'' +
                ", accountNumber='" + accountNumber + '\'' +
                '}';
    }
}
