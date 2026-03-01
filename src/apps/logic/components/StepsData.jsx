const StepsData = [
    {
        number: 1,
        title: 'Installation',
        description: 'In your terminal, run this inside your Vite project folder.',
        codeTitle: 'Terminal',
        code: `# Install Tailwind v4 and the Vite plugin

npm install tailwindcss @tailwindcss/vite`,
    },
    {
        number: 2,
        title: 'CSS Connection',
        description: `Add this to your src/index.css. V4 does not need a separate config file for dark mode.`,
        codeTitle: 'src/index.css',
        code: `@import "tailwindcss";

/* V4 detects class="dark" on <html> automatically */`,
    },
    {
        number: 3,
        title: 'Vite Plugin',
        description: 'Update your vite.config.js to use the Tailwind plugin.',
        codeTitle: 'vite.config.js',
        code: `import react from '@vitejs/plugin-react' 
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`,
    },
    {
        number: 4,
        title: 'The Context Logic',
        description: 'This is the full ThemeContext.jsx file. It handles the manual toggle logic.',
        codeTitle: 'src/context/ThemeContext.jsx',
        code: `import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
       {children}
    </ThemeContext.Provider>
  );
}`,
    },
    {
        number: 5,
        title: 'Applying Styles',
        description: `Wrap your app and use dark: classes. They only trigger when the HTML tag has the dark class.`,
        codeTitle: 'src/components/Card.jsx',
        code: `export default function Card() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 transition-colors">
      <h2 className="text-black dark:text-white font-bold">I react to the theme!</h2>
    </div>
  );
}`,
    },
    {
        number: 6,
        title: 'The Main Entry',
        description: `Finally, wrap your entire application in the ThemeProvider inside App.jsx.`,
        codeTitle: 'src/App.jsx',
        code: `import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}`,
    },
];


export default StepsData