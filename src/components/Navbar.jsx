"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onContactClick }) {
  const [activeLink, setActiveLink] = useState("Home");
  const [isDark, setIsDark] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  // Initialize theme from local storage or system preferences
  useEffect(() => {
    let isDarkTheme = false;
    try {
      isDarkTheme =
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    } catch (e) {
      isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    
    setIsDark(isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle Dark/Light Theme on html class
  const setThemeMode = (mode) => {
    if (mode === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    }
  };

  const handleNavClick = (e, linkName, href) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsMenuOpen(false);
    
    if (href === "#contact") {
      if (onContactClick) onContactClick();
      return;
    }
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element && window.lenis) {
      window.lenis.scrollTo(element, { offset: -80, duration: 1.5 });
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav id="navigation" className="fixed top-0 left-0 w-full h-[72px] lg:h-[80px] z-50 transition-transform duration-1000 ease-out bg-background/80 dark:bg-background/85 backdrop-blur-md border-b border-foreground/5 lg:px-12 px-6 flex flex-row items-center justify-between">
        
        {/* Brand Logo (Left Side) */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "Home", "#home")}
          className="flex flex-row items-center justify-start gap-2 text-base font-light select-none text-foreground"
        >
          {/* Authentic Wondermakers 4-point star SVG */}
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-foreground transition-transform duration-700 hover:rotate-90">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 11.5C22.4731 11.5001 20.961 11.3267 19.5503 10.7425C18.1395 10.1582 16.8577 9.30173 15.778 8.22201C14.6983 7.1423 13.8418 5.86046 13.2576 4.44972C12.6733 3.03897 12.4999 1.52695 12.5 0H11.5C11.5002 1.52683 11.3252 3.03875 10.7411 4.44942C10.1569 5.86009 9.30065 7.14188 8.2211 8.22159C7.14154 9.3013 5.85988 10.1578 4.44929 10.7421C3.03871 11.3265 1.52683 11.5 0 11.5V12.5C1.52672 12.4997 3.03855 12.6752 4.44912 13.2593C5.8597 13.8434 7.14138 14.6997 8.22096 15.7792C9.30054 16.8587 10.1569 18.1404 10.741 19.5509C11.3252 20.9615 11.5002 22.4733 11.5 24H12.5C12.4999 22.4732 12.6738 20.9613 13.2581 19.5508C13.8424 18.1402 14.6988 16.8585 15.7785 15.779C16.8582 14.6994 18.14 13.8432 19.5506 13.2591C20.9613 12.6751 22.4732 12.4996 24 12.5V11.5Z" fill="currentColor"></path>
          </svg>
          <span className="hidden lg:inline-block font-light uppercase tracking-widest text-xs">Wonder Makers</span>
        </a>

        {/* Center Pill-Style Dark/Light Theme Toggle */}
        <div id="switch" className="relative h-[32px] md:h-[38px] bg-black dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-full flex flex-row items-center justify-center p-0.5 z-10 w-28 md:w-32 select-none">
          <button 
            onClick={() => setThemeMode("light")}
            className={`relative z-10 h-full flex-1 text-[10px] md:text-xs font-light transition-colors duration-500 rounded-full uppercase tracking-wider ${!isDark ? "text-black" : "text-white/60"}`}
          >
            Light
          </button>
          <button 
            onClick={() => setThemeMode("dark")}
            className={`relative z-10 h-full flex-1 text-[10px] md:text-xs font-light transition-colors duration-500 rounded-full uppercase tracking-wider ${isDark ? "text-black" : "text-white/60"}`}
          >
            Dark
          </button>
          {/* Slidable background capsule */}
          <div 
            className="absolute top-0.5 bottom-0.5 left-0.5 rounded-full bg-white transition-transform duration-500 ease-in-out-quart"
            style={{
              width: "calc(50% - 2px)",
              transform: isDark ? "translateX(100%)" : "translateX(0%)"
            }}
          />
        </div>

        {/* Navigation Links (Right Side) */}
        <ul className="hidden lg:flex items-center justify-end gap-8 font-light text-xs tracking-widest uppercase">
          {navLinks.map((link) => {
            const isSelected = activeLink === link.name;
            return (
              <li key={link.name} className="relative py-1">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.name, link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group/link text-foreground/75 hover:text-foreground transition-colors duration-300"
                >
                  <span>{link.name}</span>
                  
                  {/* Underline indicators */}
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.span
                        layoutId="navbar-hover-line"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {isSelected && hoveredLink !== link.name && (
                    <motion.span
                      layoutId="navbar-active-line"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
          
          {/* Wonder Games External Link */}
          <li>
            <a 
              href="https://wondermakers.games/" 
              target="_blank" 
              rel="noopener" 
              className="flex items-center gap-1 text-foreground/75 hover:text-foreground transition-colors duration-300"
            >
              <span>Wonder Games</span>
              <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-current">
                <path d="M4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5V12V11.5ZM19.3628 12.3536C19.558 12.1583 19.558 11.8417 19.3628 11.6464L16.1808 8.46447C15.9855 8.2692 15.669 8.2692 15.4737 8.46447C15.2784 8.65973 15.2784 8.97631 15.4737 9.17157L18.3021 12L15.4737 14.8284C15.2784 15.0237 15.2784 15.3403 15.4737 15.5355C15.669 15.7308 15.9855 15.7308 16.1808 15.5355L19.3628 12.3536ZM4 12V12.5H19.0092V12V11.5H4V12Z" fill="currentColor" />
              </svg>
            </a>
          </li>

          {/* Let's Talk CTA button */}
          <li>
            <button
              onClick={onContactClick}
              className="px-6 py-2.5 rounded-full border border-foreground/10 hover:border-accent hover:bg-accent hover:text-black text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 bg-foreground text-background dark:bg-white dark:text-black dark:hover:bg-accent dark:hover:text-black cursor-pointer"
            >
              Let&apos;s talk
            </button>
          </li>
        </ul>

        {/* Mobile menu trigger button */}
        <button 
          id="menu-open" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="size-10 rounded-full bg-foreground text-background flex flex-col items-center justify-center lg:hidden z-[60] cursor-pointer"
        >
          <span className={`h-px w-5 bg-background rounded-full transition-transform duration-300 ${isMenuOpen ? "translate-y-[2px] rotate-45" : "-translate-y-1"}`}></span>
          <span className={`h-px bg-background rounded-full transition-all duration-300 ${isMenuOpen ? "w-5 -translate-y-[2px] -rotate-45" : "w-3 translate-y-1 translate-x-1"}`}></span>
        </button>

      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-dvh bg-background dark:bg-background z-40 lg:hidden flex flex-col justify-between p-8 pt-24"
          >
            <ul className="flex flex-col gap-6 uppercase text-3xl font-light tracking-wide text-right mt-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.name, link.href)}
                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors duration-300 border-b border-foreground/5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://wondermakers.games/" 
                  target="_blank" 
                  rel="noopener" 
                  className="flex items-center justify-end gap-2 py-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  <span>Wonder Games</span>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-current">
                    <path d="M4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5V12V11.5ZM19.3628 12.3536C19.558 12.1583 19.558 11.8417 19.3628 11.6464L16.1808 8.46447C15.9855 8.2692 15.669 8.2692 15.4737 8.46447C15.2784 8.65973 15.2784 8.97631 15.4737 9.17157L18.3021 12L15.4737 14.8284C15.2784 15.0237 15.2784 15.3403 15.4737 15.5355C15.669 15.7308 15.9855 15.7308 16.1808 15.5355L19.3628 12.3536ZM4 12V12.5H19.0092V12V11.5H4V12Z" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>

            <button 
              onClick={() => {
                setIsMenuOpen(false);
                if (onContactClick) onContactClick();
              }}
              className="w-full h-16 rounded-full flex items-center justify-between border border-foreground/15 text-lg pl-8 pr-2 bg-foreground text-background dark:bg-white dark:text-black font-light uppercase tracking-wider mb-8"
            >
              Let&apos;s talk
              <div className="h-12 aspect-square rounded-full flex items-center justify-center text-black bg-accent">
                <svg viewBox="0 0 9 15" fill="none" className="h-3 translate-x-[1px]">
                  <path d="M1 13.6953L7.34767 7.34767L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
