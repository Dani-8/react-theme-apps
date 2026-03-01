import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        // const savedTheme = localStorage.getItem("theme") || "theme"
        setTheme(theme => theme || "light")

        if (theme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [])


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"

        setTheme(newTheme)

        // localStorage.setItem('theme', newTheme)

        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }


    if (!theme) return null


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}




