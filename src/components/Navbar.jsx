import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaGitlab } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="inline-flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20">
            RAF
          </div>
          <div className="space-y-1 text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Portfolio</p>
            <h1 className="text-lg font-semibold text-white">Rahmat Amri</h1>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#technologies" className="transition hover:text-white">Tech</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-4 text-xl text-neutral-400">
          <a href="https://id.linkedin.com/in/rahmat-amri-fathoni-98a2b217a" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://gitlab.com/Amri93" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaGitlab />
          </a>
          <a href="https://github.com/AmriGIT" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rahmatamrif/" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
