import Step from '../components/Step';
import CodeBox from '../components/CodeBox';
import StepsData from '../components/StepsData';

const Home = () => (
    <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <header className="mb-12 text-center">
            <h1 className="text-5xl font-black mb-4 tracking-tight">The Complete Guide</h1>
            {/* <p className="text-slate-500 dark:text-slate-400 text-lg">
                No shortcuts. Here is every line of code you need.
            </p> */}
        </header>


        {StepsData.map(step => (
            <Step key={step.number} number={step.number} title={step.title}>
                <p className="mb-4 text-base">{step.description}</p>
                <CodeBox title={step.codeTitle} code={step.code} />
            </Step>
        ))}


        <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
            <h4 className="text-xl font-bold mb-2">Ready to Go!</h4>
            <p className="opacity-90 leading-relaxed">
                By following these steps, you now have a professional theme switcher. Tailwind will now look for the <code>.dark</code> class on your <code>html</code> element to decide which styles to show.
            </p>
        </div>
    </main>
);

export default Home;