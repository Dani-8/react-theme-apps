import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LogicThemeApp() {
    return (
        <div className="min-h-screen p-4 md:p-12 font-sans text-slate-900 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="flex items-center gap-2 text-indigo-400 font-bold mb-8">
                    <ArrowLeft size={20} /> Back to Portal
                </Link>
                <div className="max-w-2xl mx-auto border-4 border-dashed border-slate-700 rounded-3xl p-12 text-center">
                    <h1 className="text-2xl font-black mb-4 uppercase tracking-widest text-slate-600">
                        Advanced App Workspace
                    </h1>
                </div>
            </div>
        </div>
    );
}