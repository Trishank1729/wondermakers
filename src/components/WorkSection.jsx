"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  const projects = [
    {
      id: "work-1",
      title: "Avax.network",
      category: "Company Website",
      src: "./cover.CfYA8Hxi_1facah.webp",
      href: "https://avax.network",
      isDarkText: false
    },
    {
      id: "work-2",
      title: "Dimenso Student",
      category: "Mobile App",
      src: "./cover.BZ803aXC_1XqMSU.webp",
      href: "#",
      isDarkText: false
    },
    {
      id: "work-3",
      title: "Cati.io",
      category: "Web App",
      src: "./cover.B1fcijrz_ZHQMh.webp",
      href: "https://cati.io",
      isDarkText: false
    },
    {
      id: "work-4",
      title: "EPPI",
      category: "Premium Storefront",
      src: "./cover.CkBsXtlg_dfYmT.webp",
      href: "#",
      isDarkText: true
    },
    {
      id: "work-5",
      title: "Ubisoft Might & Magic",
      category: "Web3 App",
      src: "./cover.B6jVCRLA_Z237tOs.webp",
      href: "#",
      isDarkText: false
    }
  ];

  return (
    <section 
      id="work" 
      className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-transparent z-20 flex flex-col items-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 lg:gap-20">
        
        {/* Header container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-foreground/5 pb-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
              Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              Award-winning craft,<br />
              technical reliability.
            </h2>
          </div>
          <p className="text-foreground/70 text-sm sm:text-base max-w-sm leading-relaxed">
            Recognized by platforms like Awwwards for visual excellence, our work is built to meet the technical demands of industry-leading brands.
          </p>
        </div>

        {/* Dynamic Offset Asymmetric Project Cards Grid */}
        <div id="work-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className={project.id === "work-1" ? "col-span-full" : "col-span-1"}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {/* See All Work Horizontal Banner (bottom of grid) */}
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            href="#contact"
            id="more-work"
            className="group/link relative col-span-full aspect-[16/5] md:aspect-[8/1] rounded-2xl overflow-hidden p-0.5 flex flex-col items-stretch justify-center cursor-pointer select-none"
          >
            {/* Background background image overlay */}
            <img
              alt="More work"
              src="./work-background.DSt1DSsM_Z1yY2F6.webp"
              className="absolute inset-0 size-full object-cover group-hover/link:scale-[1.02] transition-transform duration-1000 ease-out"
            />
            
            {/* Dark tint overlay */}
            <div className="absolute inset-0 bg-black/25 z-[1]" />

            {/* Inner details container */}
            <div className="relative h-full rounded-2xl p-6 lg:p-12 text-white flex flex-row items-center justify-between gap-6 z-[2]">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-75 text-accent">Studio edge</span>
                <h3 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight">See All Work</h3>
              </div>

              {/* Bouncing Chevron Arrow Button */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300">
                <svg fill="none" viewBox="0 0 9 15" className="w-3.5 h-3.5 translate-x-0.5 transition-transform duration-300 group-hover/link:translate-x-1">
                  <path d="M1 13.6953L7.34767 7.34767L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
