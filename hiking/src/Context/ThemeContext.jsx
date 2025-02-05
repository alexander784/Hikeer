import React, { Children, useState } from 'react';
import { createContext } from 'react';


export const ThemeContext = createContext();

const ThemeContextProvider = () => {
    const [theme, setTheme] = useState({
        isLightTheme:true,
        light: { syntax: '#555', ui:'#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui:'#333', bg:' #555'}
    });

    const toggleTheme = () => {
        setTheme(prevTheme => ({
            ...prevTheme,
            isLightTheme: !prevTheme.isLightTheme
        }))

    }

    return (
        <ThemeContext.Provider value={{...theme, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
