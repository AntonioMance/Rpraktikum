import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { AuthContext } from "./components/AuthContext";

function App() {
  const [authCardNumber, setAuthCardNumber] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [refreshBalance, setRefreshBalance] = useState(0);

  return (
    <AuthContext.Provider value={{ authCardNumber, setAuthCardNumber, setRefreshBalance }}>
      <Router>
        {authCardNumber ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/profile" element={<Profile cardNumber={authCardNumber} />} />
              <Route path="/withdraw" element={<Withdraw cardNumber={authCardNumber} />} />
              <Route path="/deposit" element={<Deposit cardNumber={authCardNumber} />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
