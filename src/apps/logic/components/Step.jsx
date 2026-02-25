const Step = ({ number, title, children }) => (
    <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all mb-8">
        <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/30">
                {number}
            </div>
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </div>
        
        <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {children}
        </div>
    </div>
);

export default Step