import { useContext, useEffect, useState } from "react";
import { FaBars, FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { socialLinks } from "../../data";
import { useLanguage } from "../../hooks/useLanguage";
import logo from "../../assets/logo.png";

const socialIcons = {
  github: <FaGithub />,
  gitlab: <FaGitlab />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { t, toggleLanguage } = useLanguage();
  const navItems = t.navItems;
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    let ticking = false;

    const updateActiveSection = () => {
      const navbarHeight = document.querySelector("header")?.offsetHeight ?? 80;
      const scrollPosition = window.scrollY + navbarHeight + 48;
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isNearBottom) {
        setActiveSection(sections[sections.length - 1]?.id ?? "hero");
        return;
      }

      const currentSection = sections.reduce((current, section) => {
        if (section.offsetTop <= scrollPosition) {
          return section.id;
        }

        return current;
      }, "hero");

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navItems]);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector("header")?.offsetHeight ?? 80;

    if (!section) {
      return;
    }

    setActiveSection(sectionId);
    setIsOpen(false);
    window.scrollTo({
      top: section.offsetTop - navbarHeight - 16,
      behavior: "smooth",
    });
  };

  const getNavLinkClassName = (href) => {
    const isActive = activeSection === href.replace("#", "");

    return `rounded-md px-3 py-2 transition focus:outline-none focus:ring-2 focus:ring-emerald-300/40 ${
      isActive
        ? "bg-emerald-300 text-zinc-950 shadow-sm shadow-emerald-300/20 hover:bg-emerald-200 hover:text-zinc-950"
        : "text-zinc-300 hover:bg-white/10 hover:text-white"
    }`;
  };

  const getMobileNavLinkClassName = (href) => {
    const isActive = activeSection === href.replace("#", "");

    return `rounded-md px-3 py-3 transition ${
      isActive
        ? "bg-emerald-300 text-zinc-950 shadow-sm shadow-emerald-300/20"
        : "text-zinc-200 hover:bg-white/10 hover:text-white"
    }`;
  };

  const renderThemeToggle = (compact = false) => (
    <button
      type="button"
      aria-label={isDarkMode ? t.theme.toLight : t.theme.toDark}
      aria-pressed={!isDarkMode}
      onClick={toggleTheme}
      className={`theme-toggle inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200 shadow-sm shadow-black/20 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40 ${
        compact ? "h-10 w-10 justify-center" : "h-10 gap-2 px-3"
      }`}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
      {!compact && <span className="text-sm font-medium">{isDarkMode ? t.theme.light : t.theme.dark}</span>}
    </button>
  );

  const renderLanguageToggle = (compact = false) => (
    <button
      type="button"
      aria-label="Ganti bahasa"
      onClick={toggleLanguage}
      className={`inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm font-semibold text-zinc-200 shadow-sm shadow-black/20 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40 ${
        compact ? "h-10 w-10" : "h-10 px-3"
      }`}
    >
      {t.languageLabel}
    </button>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="inline-flex min-w-0 items-center gap-3" onClick={(event) => handleNavClick(event, "#hero")}>
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-emerald-400/10 ring-1 ring-emerald-300/20">
              <img src={logo} alt="Rahmat Amri logo" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 text-left">
              <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">{t.portfolio}</p>
              <h1 className="truncate text-base font-semibold text-white sm:text-lg">Rahmat Amri</h1>
            </div>
          </a>

          <nav className="hidden items-center rounded-lg border border-white/10 bg-white/[0.03] p-1 text-sm text-zinc-300 shadow-sm shadow-black/20 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined} onClick={(event) => handleNavClick(event, item.href)} className={getNavLinkClassName(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 text-lg text-zinc-400 lg:flex">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
                className="rounded-md p-2 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
              >
                {socialIcons[item.icon]}
              </a>
            ))}
            {renderLanguageToggle()}
            {renderThemeToggle()}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {renderLanguageToggle(true)}
            {renderThemeToggle(true)}
            <button
              type="button"
              aria-label="Buka atau tutup menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200 shadow-sm shadow-black/20 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-lg border border-white/10 bg-zinc-900/95 p-3 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur lg:hidden">
            <nav className="grid gap-1 text-sm text-zinc-200">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} aria-current={activeSection === item.href.replace("#", "") ? "page" : undefined} onClick={(event) => handleNavClick(event, item.href)} className={getMobileNavLinkClassName(item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-lg text-zinc-400">
              {socialLinks.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="rounded-md p-2 transition hover:bg-white/10 hover:text-white">
                  {socialIcons[item.icon]}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
