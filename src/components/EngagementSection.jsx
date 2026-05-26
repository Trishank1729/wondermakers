"use client";

import { motion } from "framer-motion";

export default function EngagementSection({ onContactClick }) {
  const models = [
    {
      index: "01",
      title: "End-to-end product delivery",
      description: "We take full ownership of the product lifecycle – from discovery to a scalable digital product.",
      bullets: [
        "Senior cross-functional team",
        "Discovery to delivery ownership",
        "Autonomous process management",
        "Defined product strategy and roadmap"
      ]
    },
    {
      index: "02",
      title: "Embedded Expertise",
      description: "Our senior specialists integrate directly into your team to fill expertise gaps or accelerate delivery.",
      bullets: [
        "Direct integration of senior experts",
        "Matches your internal workflow",
        "Fills specific expertise gaps",
        "Flexible and scalable team growth"
      ]
    }
  ];

  const edgeItems = [
    {
      title: "Design as strategic value",
      description: "Design is more than aesthetics. It sharpens positioning, increases perceived value, and drives measurable results.",
      src: "./edge1.B4SIKxBY_Z1k9feR.webp"
    },
    {
      title: "Fluid Scaling UI",
      description: "Beyond responsive design. Our Fluid Scaling Systems keep interfaces consistent across every screen size while maintaining performance and clean code.",
      src: "./edge2.BWxj4T7q_1Fb4PA.webp"
    },
    {
      title: "Business-driven engineering",
      description: "We start with your business goals. From rapid MVP launches to long-term scalability, we choose technologies that balance speed, cost, and future growth.",
      src: "./edge3.tDS3er97_ZhElIH.webp"
    },
    {
      title: "Purposeful Immersion",
      description: "We use 3D, motion, and interaction design to create meaningful engagement and tell your story – without compromising usability or performance.",
      src: "./edge4.DKzVHLl2_12voMM.webp"
    }
  ];

  const stats = [
    { value: "11+", label: "years in digital design & development" },
    { value: "20+", label: "inhouse experts" },
    { value: "150+", label: "projects delivered" },
    { value: "3", label: "continents covered" }
  ];

  const studioImages = [
    "./studio1.C-9gsw3V_Z2d6Pc3.webp",
    "./studio2.D5CHQr5A_Z213vPG.webp",
    "./studio3.cknibGVz_1RcQuK.webp",
    "./studio4.DAp7Gbve_11dDjg.webp"
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-transparent z-20 flex flex-col items-center gap-24 lg:gap-32">
      
      {/* 1. Engagement Models Block */}
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
            Partnership
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Engagement models
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base mt-2 leading-relaxed">
            Our engagement models are designed for flexibility, allowing us to adapt each partnership to your product and team structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <motion.div
              key={model.index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-card-bg dark:bg-card-bg border border-card-border rounded-3xl flex flex-col justify-between gap-8"
            >
              <div>
                <div className="flex flex-row items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-foreground/5 dark:bg-white/10 text-xs font-mono font-bold flex items-center justify-center text-accent">
                    {model.index}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                    {model.title}
                  </h3>
                </div>
                <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Bullets List */}
                <ul className="flex flex-col gap-3">
                  {model.bullets.map((bullet) => (
                    <li key={bullet} className="flex flex-row items-center gap-3 text-sm font-light text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact trigger button inside card */}
              <button
                onClick={onContactClick}
                className="w-fit px-6 py-2.5 rounded-full border border-foreground/15 hover:border-accent hover:bg-accent hover:text-black text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 bg-foreground text-background dark:bg-white dark:text-black cursor-pointer"
              >
                Contact us
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Our Edge Block */}
      <div className="w-full max-w-7xl flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
            Why us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Our edge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {edgeItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="group/edge bg-card-bg dark:bg-card-bg border border-card-border rounded-3xl p-5 flex flex-col gap-5 hover:border-accent/40 transition-colors duration-300"
            >
              {/* Custom Edge Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-black/5">
                <img
                  alt={item.title}
                  src={item.src}
                  className="absolute inset-0 size-full object-cover group-hover/edge:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base md:text-lg font-bold uppercase tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-foreground/75 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Senior-Led Studio / Stats Block */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        
        {/* Left Stats column */}
        <div className="flex-1 flex flex-col justify-between gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
              Our Studio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
              Senior-led<br />studio
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base mt-2 leading-relaxed max-w-md">
              Proven expertise and global reach. Our senior-led team brings over a decade of design and engineering experience to every product we build.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 border-l border-foreground/10 dark:border-white/10 pl-4">
                <span className="text-4xl md:text-5xl font-black text-accent font-sans">{stat.value}</span>
                <span className="text-xs md:text-sm font-light text-foreground/70 leading-normal uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Gallery column */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {studioImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="aspect-square rounded-3xl overflow-hidden relative bg-black/5"
            >
              <img
                alt="Studio layout"
                src={src}
                className="absolute inset-0 size-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
