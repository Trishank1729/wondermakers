"use client";

import { motion } from "framer-motion";

export default function WhatWeBuild() {
  const categories = [
    {
      index: "01",
      title: "Websites & Digital Experiences",
      description: "High-end websites designed to shape perception and strengthen your brand. We combine immersive storytelling with flawless interaction – without sacrificing performance.",
      tags: ["Company Website", "Product Website", "Immersive Website", "Landing Page", "Content Hub"],
      src: "./card1.PtmqNxVu_Z1AU3rH.webp"
    },
    {
      index: "02",
      title: "Apps, Platforms & Real-Time Systems",
      description: "Digital systems built for demanding environments. From SaaS platforms to real-time dashboards, we design and engineer products that handle complexity while staying intuitive.",
      tags: ["Mobile App", "Web App", "SaaS Product", "Business Portal", "Data Dashboard"],
      src: "./card2.fDxwyPZ9_Z2ilK97.webp"
    },
    {
      index: "03",
      title: "E-commerce & Product Storytelling",
      description: "Beyond the standard storefront. We build premium shopping experiences where strong storytelling and thoughtful UX increase perceived value and conversion.",
      tags: ["Premium Storefront", "B2B Portal", "Product Configurator", "Custom Commerce"],
      src: "./card3.CIzRSh56_Z2j6o9D.webp"
    },
    {
      index: "04",
      title: "Web3 & On-Chain Platforms",
      description: "We bridge blockchain complexity with intuitive interfaces. Our products are secure, performant, and accessible – helping decentralized technologies reach real users.",
      tags: ["NFT Platform", "dApp", "Token Portal", "Web3 Integration"],
      src: "./card4.D9Vhw0QY_ZhiXcE.webp"
    }
  ];

  return (
    <section 
      id="capabilities" 
      className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-transparent z-20"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 lg:gap-20">
        
        {/* Section title */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            What we build
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base mt-2 leading-relaxed">
            We focus on the intersection of high-end design and technical complexity – where our approach creates the most value for digital products.
          </p>
        </div>

        {/* 2x2 Grid of Capabilities Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="group/card w-full bg-card-bg dark:bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-lg p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6 hover:border-accent/40 transition-all duration-300"
            >
              {/* Left text column */}
              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex flex-row items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-foreground/5 dark:bg-white/10 text-xs font-mono font-bold flex items-center justify-center text-accent">
                      {cat.index}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-foreground/75 text-xs md:text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Sub tags row */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cat.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-light border border-foreground/10 dark:border-white/10 rounded-full hover:border-accent hover:text-accent transition-colors duration-300 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right image column */}
              <div className="w-full md:w-[160px] lg:w-[200px] h-[160px] md:h-full aspect-square md:aspect-auto rounded-2xl overflow-hidden relative shrink-0">
                <img
                  alt={cat.title}
                  src={cat.src}
                  className="absolute inset-0 size-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
