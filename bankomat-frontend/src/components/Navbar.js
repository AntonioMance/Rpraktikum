import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { setAuthCardNumber } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthCardNumber("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">ATM</div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/withdraw">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deposit">Deposit</Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link" style={{background: "none", border: "none", cursor: "pointer"}}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


