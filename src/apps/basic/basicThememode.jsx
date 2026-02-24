import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BasicThemeApp() {
    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8">
                    <ArrowLeft size={20} /> Back to Portal
                </Link>
                <div className="max-w-2xl mx-auto border-4 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                    <h1 className="text-2xl font-black mb-4 uppercase tracking-widest text-slate-400">
                        Basic App Workspace
                    </h1>
                </div>
            </div>
        </div>
    );
}