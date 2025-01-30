import React, { children, createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);



export const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');

    const login = (name) => {
        setUserName(name);
        localStorage.setItem('userName', name);
    };

    const logout = () => {
        setUserName('');
        localStorage.removeItem('userName');
    };


  return (
    <AuthContext.Provider value={{ userName, login, logout }}>
        {children}
    </AuthContext.Provider>
  )
};
export default AuthContext;