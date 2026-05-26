"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection && window.lenis) {
      window.lenis.scrollTo(aboutSection, { offset: -80, duration: 1.5 });
    } else if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-[95vh] pt-[120px] md:pt-[160px] pb-12 px-6 md:px-12 flex flex-col justify-between items-center text-center select-none overflow-hidden z-20"
    >
      {/* Visual Header typography */}
      <div className="flex-grow flex flex-col items-center justify-center max-w-5xl">
        <motion.h1 
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-black tracking-tight leading-[1.02] text-foreground uppercase"
        >
          High-end design.<br />
          Crafted code.
        </motion.h1>
      </div>

      {/* Description paragraph and scroll indicator */}
      <div className="flex flex-col items-center justify-end gap-8 w-full max-w-3xl z-10">
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl"
        >
          We are a digital product studio for teams who see design and engineering as their competitive advantage. From flagship websites to scalable applications, we build products where world-class aesthetics meet robust infrastructure.
        </motion.p>

        {/* Bouncing neon lime circular link to scroll downwards */}
        <motion.a 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          href="#about"
          onClick={scrollToAbout}
          className="w-14 h-14 rounded-full bg-accent text-black hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(225,252,6,0.3)] hover:scale-105 active:scale-95 cursor-pointer animate-bounce-slow"
        >
          {/* Neon bouncing downward chevron SVG */}
          <svg viewBox="0 0 9 15" fill="none" className="w-3.5 h-3.5 stroke-[2] rotate-90 text-current">
            <path d="M1 13.6953L7.34767 7.34767L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="sr-only">scroll to about section</span>
        </motion.a>
      </div>
    </section>
  );
}
