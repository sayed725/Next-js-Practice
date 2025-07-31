"use client"

const { createContext, useState, useEffect, useContext } = require("react");

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children}) {

    const [theme, setTheme] = useState(()=>{
        if ( typeof window !== "undefined"){
            // return localStorage.getItem("theme") || "light";

            const storedTheme = localStorage.getItem('theme')
            return storedTheme === 'dark'? 'dark' : 'light'
        }
        return 'light'
    })

    useEffect(()=>{
        if ( theme === 'dark' ){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')  
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    },[theme])

    const toggleTheme = ()=>{
       setTheme((prevTheme) => (
             prevTheme === 'light' ? 'dark': 'light' 
       ) )
    }





    return (
        <ThemeContext.Provider value={ { theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    
    return context;
}