"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const textColorClass = project.isDarkText ? "text-black border-black bg-white/10" : "text-white border-white bg-black/10";
  const hoverBtnColorClass = project.isDarkText ? "bg-white/20 border-black/20 text-black" : "bg-black/10 border-white/20 text-white";

  return (
    <a
      href={project.href}
      id={project.id}
      target={project.href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group/link p-2 md:p-3 flex flex-col items-stretch justify-end rounded-2xl overflow-hidden relative first:col-span-full md:first:aspect-video aspect-square select-none cursor-pointer"
    >
      {/* Background Cover Image */}
      <img
        alt={project.title}
        src={project.src}
        className="absolute inset-0 size-full object-cover group-hover/link:scale-[1.03] transition-transform duration-1000 ease-out"
        loading="lazy"
      />

      {/* Hover Circular Center Arrow Button */}
      <div 
        className={`z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover/link:opacity-100 scale-90 group-hover/link:scale-100 invisible group-hover/link:visible ${hoverBtnColorClass}`}
      >
        <svg fill="none" viewBox="0 0 9 15" className="w-3.5 h-3.5 translate-x-0.5 transition-transform duration-300 group-hover/link:translate-x-1">
          <path d="M1 13.6953L7.34767 7.34767L1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Bottom Overlay Bar */}
      <div className={`relative p-4 md:p-6 flex flex-row items-center justify-between gap-4 rounded-xl backdrop-blur-md ${textColorClass}`}>
        <h2 className="text-xl md:text-2xl font-light tracking-wide">
          {project.title}
        </h2>
        
        {/* Category Pill tag */}
        <span className="h-8 md:h-10 px-4 inline-flex items-center justify-center rounded-full text-xs font-light whitespace-nowrap border border-current">
          {project.category}
        </span>
      </div>
    </a>
  );
}
