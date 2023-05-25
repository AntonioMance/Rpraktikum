import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "./AuthContext";

function Withdraw(props) {
  const [amount, setAmount] = useState(0);
  const { setRefreshBalance } = useContext(AuthContext);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(`http://localhost:8080/api/v1/users/withdraw/${props.cardNumber}?amount=${amount}`);
      
      let newBalance = response.data.split(': ')[1];
      let timestamp = new Date();
      alert(`Receipt\n\nDate: ${timestamp.toLocaleDateString()} \nTime: ${timestamp.toLocaleTimeString()} \nTransaction: Withdrawal \nAmount: $${amount} \nNew Balance: $${newBalance}`);
      setRefreshBalance(prev => prev + 1);
    } catch (error) {
      alert('Withdraw failed.');
      console.error('There was an error!', error);
    }
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-bold fs-4">Withdraw</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 w-25">
            <label htmlFor="withdrawAmount" className="form-label">Amount:</label>
            <input type="number" className="form-control" id="withdrawAmount" value={amount} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Withdraw</button>
        </form>
      </div>
    </div>
  );
}

export default Withdraw;
