const StepsData = [
    {
        number: 1,
        title: 'Installation',
        description: 'Run these commands in your terminal. We use Tailwind v3 because it supports explicit class-based toggling.',
        codeTitle: 'Terminal',
        code: `# 1. Install Tailwind and its friends
npm install -D tailwindcss@3 postcss autoprefixer

# 2. Generate the config files
npx tailwindcss init -p`,
    },
    {
        number: 2,
        title: 'The Configuration',
        description: 'Open tailwind.config.js. Add the darkMode line and the content paths exactly like this:',
        codeTitle: 'tailwind.config.js',
        code: `/** @type {import('tailwindcss').Config} */
export default {
darkMode: 'class',
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: { extend: {} },
plugins: [],
}`,
    },
    {
        number: 3,
        title: 'CSS Directives (index.css)',
        description:
            "In your src/index.css, add the Tailwind v3 directives. Note that in v4, you'd use a single @import, but v3 requires these three lines.",
        codeTitle: 'src/index.css',
        code: `@tailwind base;
@tailwind components;
@tailwind utilities;

Note: v4 uses @import "tailwindcss", but we need the above for v3`,
    },
    {
        number: 3,
        title: 'The Provider Setup',
        description: 'This is your ThemeContext.jsx. It manages the state and updates the html tag.',
        codeTitle: 'src/components/ThemeContext.jsx',
        code: `
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null)


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "theme"
        setTheme(savedTheme)

        if (savedTheme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [])


    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"

        setTheme(newTheme)

        localStorage.setItem('theme', newTheme)

        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }



    if (!theme) return null


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
`,
    },
    {
        number: 4,
        title: 'Final Application Structure',
        description: `Wrap your App.jsx with the ThemeProvider and use the dark: utility classes in your components.`,
        codeTitle: 'src/App.jsx',
        code: `export default function App() {
return (
    <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
        <Navbar />
        <h1 className="text-black dark:text-white font-bold">Success!</h1>
    </div>
    </ThemeProvider>
);
}`,
    },
];


export default StepsData