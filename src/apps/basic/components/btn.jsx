import { useContext } from "react";
import { ThemeContext } from "../basicThememode";


export default function Btn(){
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <button onClick={toggleTheme} 
        className=" p-4 rounded-xl shadow-xl cursor-pointer active:scale-90 transition-all duration-300"
        style={{
            background: theme === "light" ? "#222" : "#F8FAFC",
            color: theme === "light" ? "#fff" : "#000",
        }}>
            Current Theme: {theme}
        </button>
    )
}




