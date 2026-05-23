import { useEffect, useState } from "react";
import { Navbar } from "./components/layout";
import { About, Contact, Experience, Hero, Projects, Technologies } from "./components/sections";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const isDarkMode = theme === "dark";

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div data-theme={theme} className={`portfolio-shell theme-${theme} relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-300 selection:text-zinc-950`}>
        <div className="portfolio-bg fixed inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,23,42,.98),rgba(24,24,27,.97)_45%,rgba(32,24,13,.92)),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[auto,64px_64px,64px_64px]" />
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-24 sm:px-6 lg:px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
