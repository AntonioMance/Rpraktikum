import React, { useState } from 'react';
import beepSound from './beep.mp3';  
import './Keypad.css';

const BeepSound = new Audio(beepSound);
BeepSound.playbackRate = 3;  

function Keypad({ onNumberChange, onEnter }) {
    const [enteredPin, setEnteredPin] = useState("");

    const handleButtonClick = (event) => {
        BeepSound.play();

        if(enteredPin.length < 4) {
            const newPin = enteredPin + event.target.value;
            setEnteredPin(newPin);
            onNumberChange(newPin);
        }
    };

    const handleClearClick = () => {
        BeepSound.play();

        setEnteredPin("");
        onNumberChange("");
    };

    const handleEnterClick = () => {
        BeepSound.play();

        if(enteredPin.length === 4) {
            onEnter();
        }
    };

    return (
        <div className="d-flex flex-column align-items-center keypad-button">
            <div className="btn-group">
                <button type="button" className="btn btn-secondary btn-lg m-1" value="1" onClick={handleButtonClick}>1</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="2" onClick={handleButtonClick}>2</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="3" onClick={handleButtonClick}>3</button>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary btn-lg m-1" value="4" onClick={handleButtonClick}>4</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="5" onClick={handleButtonClick}>5</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="6" onClick={handleButtonClick}>6</button>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary btn-lg m-1" value="7" onClick={handleButtonClick}>7</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="8" onClick={handleButtonClick}>8</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="9" onClick={handleButtonClick}>9</button>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary btn-lg m-1" onClick={handleClearClick}>CLEAR</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" value="0" onClick={handleButtonClick}>0</button>
                <button type="button" className="btn btn-secondary btn-lg m-1" onClick={handleEnterClick}>ENTER</button>
            </div>
        </div>
    );
}

export default Keypad;

