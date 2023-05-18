import { createContext, useState } from 'react';

//Contexto
export const ThemeContext = createContext();

//Provedor
export const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };


    return(
        // Value seria os valores e comportamento que se deseja prover
        <ThemeContext.Provider value={{theme, toggleTheme}}> 
            {children}
        </ThemeContext.Provider>
    );
};