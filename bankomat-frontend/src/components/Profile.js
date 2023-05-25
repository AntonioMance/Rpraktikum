import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from './AuthContext';
import Balance from './Balance'; 

const Profile = () => {
    const authContext = useContext(AuthContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/users/profile/${authContext.authCardNumber}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(err => console.log(err));
    }, [authContext.authCardNumber]);

    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">User Profile</h5>
            {user && (
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Account Number:</strong> {user.accountNumber}</p>
                <Balance cardNumber={authContext.authCardNumber} refreshBalance={authContext.refreshBalance} />
              </div>
            )}
          </div>
        </div>
    );
};

export default Profile;
