import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, createContext } from "react";

import Btn from "./components/btn"

// ========================================================
// ========================================================

export const ThemeContext = createContext()


export default function BasicThemeApp() {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((theme) => theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>

            <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 trasition-all duration-300"
            style={{
                background: theme === "light" ? "#F8FAFC" : "#222",
                color: theme === "light" ? "#000" : "#fff",
            }}>

                <div className="max-w-5xl mx-auto">
                    <Link to="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8">
                        <ArrowLeft size={20} /> Back to Portal
                    </Link>


                    <div className="flex justify-center mt-50">
                        <Btn />
                    </div>
                </div>

            </div>

        </ThemeContext.Provider>
    );
}