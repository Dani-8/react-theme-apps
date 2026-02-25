import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThemeProvider, useTheme } from '../components/ThemeProvider'

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <span>
                    <Link to="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-1">
                        <ArrowLeft size={20} /> Back to Portal
                    </Link>
                    <span className="font-black text-xl tracking-tighter text-blue-600 dark:text-blue-400">THEME</span>
                </span>
                <button
                    onClick={toggleTheme}
                    className="px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                    {theme === 'dark' ? '☀️ LIGHT MODE' : '🌙 DARK MODE'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar