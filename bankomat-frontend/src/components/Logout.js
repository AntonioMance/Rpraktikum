import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Logout() {
    const { setAuthCardNumber } = useContext(AuthContext);

    const handleLogout = () => {
        setAuthCardNumber("");
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
