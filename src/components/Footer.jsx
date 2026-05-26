"use client";

import { motion } from "framer-motion";

export default function Footer({ onContactClick }) {
  const socialLinks = [
    { name: "Dribbble", href: "https://dribbble.com/wondermakers" },
    { name: "Behance", href: "https://www.behance.net/wondermakers" },
    { name: "Instagram", href: "https://www.instagram.com/wondermakers.digital/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/wondermakersdigital/" },
    { name: "X (Twitter)", href: "https://x.com/wmdigi" }
  ];

  return (
    <footer 
      id="contact" 
      className="relative w-full bg-black text-white py-16 lg:py-24 px-6 md:px-12 z-20 flex flex-col items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">
        
        {/* Top: Collaboration trigger */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-12 lg:pb-16">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-accent">Want to collaborate?</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">Let&apos;s talk</h2>
          </div>

          <button
            onClick={onContactClick}
            className="h-16 rounded-full flex items-center justify-between border border-white/15 text-lg pl-8 pr-2 bg-white text-black font-semibold uppercase tracking-wider w-full md:w-auto md:min-w-[240px] hover:bg-accent transition-colors duration-300 cursor-pointer"
          >
            Contact form
            <div className="h-12 aspect-square rounded-full flex items-center justify-center text-accent bg-black">
              <svg viewBox="0 0 9 15" fill="none" className="h-3 translate-x-[1px]">
                <path d="M1 13.6953L7.34767 7.34767L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </button>
        </div>

        {/* Middle: Contacts & Address & Socials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-sm font-light text-white/70">
          
          {/* Ask column */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Want to ask something?</span>
            <a href="mailto:team@wondermakers.digital" className="text-base text-white hover:text-accent transition-colors duration-300">team@wondermakers.digital</a>
            <a href="tel:+420603410127" className="text-base text-white hover:text-accent transition-colors duration-300">+420 603 410 127</a>
          </div>

          {/* Visit column */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Want to visit us?</span>
            <a 
              href="https://share.google/TEJUHOFAyJUyoa1pY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-white hover:text-accent transition-colors duration-300 leading-normal"
            >
              Mezibranska 1668/5, New town<br />110 00 Prague 1, Czech Republic
            </a>
            <a 
              href="https://share.google/TEJUHOFAyJUyoa1pY"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-xs font-mono uppercase tracking-widest text-accent hover:underline mt-1"
            >
              View on Map
            </a>
          </div>

          {/* Socials column */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Stay in the loop</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom: Legal declarations */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/10 pt-8 text-[11px] font-light text-white/40 uppercase tracking-widest">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <span>© 2026 WONDER MAKERS STUDIO s.r.o.</span>
            <span>ICO: 17844576</span>
            <span>DIC: CZ17844576</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
