import Step from '../components/Step';
import CodeBox from '../components/CodeBox';
import StepsData from '../components/StepsData';

const Home = () => (
    <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <header className="mb-12 text-center">
            <h1 className="text-5xl font-black mb-4 tracking-tight">The Complete Guide</h1>
        </header>


        {StepsData.map(step => (
            <Step key={step.number} number={step.number} title={step.title}>
                <p className="mb-4 text-base">{step.description}</p>
                <CodeBox title={step.codeTitle} code={step.code} />
            </Step>
        ))}


        <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/20">
            <h4 className="text-xl font-bold mb-2">Ready to Go!</h4>
            <p className="opacity-90 leading-relaxed font-thin">
                Your theme system is now fully functional. Tailwind detects the <code className='font-black'>.dark</code> class on your <code className='font-black'>html</code> element and automatically applies the correct styles.
            </p>
        </div>
    </main>
);

export default Home;