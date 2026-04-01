import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-neutral-100 antialiased selection:bg-cyan-300 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.14),_transparent_25%),#020617]"></div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
