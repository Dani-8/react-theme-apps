import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useState, createContext } from "react";


const themeContext = createContext()

export default function BasicThemeApp() {

    const [theme, setTheme] = useState("light")

    



    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8">
                    <ArrowLeft size={20} /> Back to Portal
                </Link>
                
                
            </div>
        </div>
    );
}