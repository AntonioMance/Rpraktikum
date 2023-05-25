import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authCardNumber, setAuthCardNumber] = useState(null);
    
    return (
        <AuthContext.Provider value={{ authCardNumber, setAuthCardNumber }}>
            {children}
        </AuthContext.Provider>
    );
}
