import { useEffect, useState } from "react";
import { Navbar } from "./components/layout";
import { About, Contact, Experience, Hero, Projects, Technologies } from "./components/sections";
import { LanguageContext } from "./context/LanguageContext";
import { ThemeContext } from "./context/ThemeContext";
import { translations } from "./data/translations";

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "id");
  const isDarkMode = theme === "dark";
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <div data-theme={theme} className={`portfolio-shell theme-${theme} relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-300 selection:text-zinc-950`}>
          <div className="portfolio-bg fixed inset-0 -z-10 bg-[linear-gradient(135deg,rgba(15,23,42,.98),rgba(24,24,27,.97)_45%,rgba(32,24,13,.92)),linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[auto,64px_64px,64px_64px]" />
          <a href="#main-content" className="skip-link">
            {language === "id" ? "Lewati ke konten utama" : "Skip to main content"}
          </a>
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-24 sm:px-6 lg:px-8">
            <Navbar />
            <main id="main-content" tabIndex="-1">
              <Hero />
              <About />
              <Technologies />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </div>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
