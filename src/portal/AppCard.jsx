import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AppCard({
    to, title, descp, icon, iconBg, iconColor,
}) {
    return (
        <Link to={to} className="block group">
            <div className="group h-full bg-white p-6 rounded-3xl shadow-xl border border-slate-300 hover:border-indigo-500 transition-all duration-300 hover:translate-y-[-5px]">
                <div
                    className={`w-14 h-14 ${iconBg} ${iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-115 transition-all duration-300`}
                >
                    {icon}
                </div>
                <h2 className="text-lg font-bold mb-2 text-slate-800">{title}</h2>
                <p className="text-sm text-slate-500 mb-6">{descp}</p>
                <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm">
                    Launch Application <span className="group-hover:translate-x-2 transition-all duration-300"><ArrowRight size={16} /></span>
                </div>
            </div>
        </Link>
    );
}