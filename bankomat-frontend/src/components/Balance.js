import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Balance({ cardNumber, refreshBalance }) {
const [balance, setBalance] = useState(null);
useEffect(() => {
    const fetchBalance = async () => {
        console.log("Card Number in Balance: ", cardNumber);

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/users/balance/${cardNumber}`);
            console.log("Balance Response: ", response);
            setBalance(response.data);
        } catch (error) {
            console.log('Error getting balance:', error);
        }
    };
    
    fetchBalance();
}, [cardNumber, refreshBalance]);

return (
    <div>
        <h5>Your Balance: <span style={{ fontWeight: 'normal' }}>{balance !== null ? balance : "Loading..."}</span></h5>
    </div>
);
}

export default Balance;