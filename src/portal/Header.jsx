import { Lightbulb } from "lucide-react";

export default function Header() {
    return (
        <header className="flex justify-between items-center mb-10">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className='bg-gradient-to-tr from-yellow-400 via-orange-500 to-yellow-200 text-white p-3 rounded-2xl shadow-xl shadow-orange-200/40'>
                        <Lightbulb size={25} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Theme Lab</h2>
                </div>


                <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight mb-1'>Select a version</h1>
                <p className="text-slate-500 text-sm font-medium">Explore the different implementations below</p>
            </div>
        </header>
    );
}