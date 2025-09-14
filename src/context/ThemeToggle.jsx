import {useState , useEffect} from "react";

export function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light" : "Switch to Dark"}
        </button>
      );
}