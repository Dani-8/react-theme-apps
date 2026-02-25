const CodeBox = ({ title, code }) => (
    <div className="my-6">
        <div className="bg-slate-800 text-slate-300 px-4 py-2 rounded-t-xl text-xs font-mono border-x border-t border-slate-700">
            {title}
        </div>
        
        <pre className="bg-slate-900 text-blue-300 p-4 rounded-b-xl text-xs overflow-x-auto border border-slate-700 font-mono">
            <code>{code}</code>
        </pre>
    </div>
);

export default CodeBox