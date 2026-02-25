import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Navbar from "./components/Navbar"

export default function LogicThemeApp() {
    return (
        // <ThemeProvider>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-blue-500 selection:text-white">
                <Navbar />
                {/* <Home /> */}
            </div>
        // </ThemeProvider>
    );
}