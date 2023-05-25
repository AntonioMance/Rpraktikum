import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import Keypad from './Keypad';
import './Login.css';

function Login() {
    const [cardNumber, setCardNumber] = useState('');
    const [pin, setPin] = useState('');
    const { setAuthCardNumber } = useContext(AuthContext);

    const handlePinChange = (pin) => {
        setPin(pin);
    };

    const handleSubmit = async () => {
        const user = {
            cardNumber: cardNumber,
            pin: pin
        };

        const response = await axios.post('http://localhost:8080/api/v1/users/authenticate', user);

        if(response.data === "Authenticated successfully") {
            setAuthCardNumber(cardNumber);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card login-card">
                <h1 className="mb-4">Login</h1>
                <div className="form-group text-center">
                    <label htmlFor="cardNumber" className="form-label ">Enter Card Number</label>
                    <input 
                        type='text'
                        id='cardNumber'
                        className='form-control interactive-input'
                        placeholder='Card Number'
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="form-group text-center">
                    <label htmlFor="pin" className="form-label">Enter PIN</label>
                    <input
                        type='password'
                        id='pin'
                        className='form-control interactive-input'
                        value={pin.replace(/./g, '*')}
                        disabled
                    />
                    <Keypad onNumberChange={handlePinChange} onEnter={handleSubmit} />
                </div>
            </div>
        </div>
    );
}

export default Login;

