import React, { Children, createContext, useContext, useState } from 'react'

const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext);

};

export const AuthProvider = () => {
    const[username, setUserName] = useState('');

    const login = () => {
        setUserName(name);

    };
    const logout = () => {
        setUserName('');
    };
}
  return (
    <AuthContext.Provider value={{ userName, login, logout}}>
        {Children}
    </AuthContext.Provider>
  )

export default AuthContext;