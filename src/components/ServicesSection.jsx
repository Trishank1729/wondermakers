"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    { index: "01", name: "Product Strategy" },
    { index: "02", name: "UX/UI Design" },
    { index: "03", name: "3D, Motion & Immersive Design" },
    { index: "04", name: "Creative Frontend & App Engineering" },
    { index: "05", name: "Backend, CMS & System Engineering" },
    { index: "06", name: "Web3 & On-Chain Engineering" }
  ];

  return (
    <section 
      id="services" 
      className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-transparent z-20"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-start gap-12 lg:gap-20">
        
        {/* Left Column - Sticky Sidebar on desktop */}
        <div className="flex flex-col items-start justify-start gap-8 lg:sticky lg:top-[120px]">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-accent">
            Our Offerings
          </span>
          <h2 id="services-heading" className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05]">
            Our<br />Services
          </h2>
          <p className="text-foreground/75 text-lg md:text-xl leading-relaxed max-w-md">
            From strategy to deployment. We provide full-scope delivery or targeted expertise to solve your specific design and technical challenges.
          </p>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById("contact");
              if (contactSection && window.lenis) {
                window.lenis.scrollTo(contactSection, { offset: -80, duration: 1.5 });
              } else if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase py-3 px-6 overflow-hidden rounded-full border border-foreground/15 hover:border-accent hover:bg-accent hover:text-black transition-colors duration-300 bg-card-bg mt-4"
          >
            <span>Explore Services</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right Column - Scrolling List of Services */}
        <div className="w-full flex flex-col items-stretch justify-start gap-4 lg:mt-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="p-5 md:p-6 lg:p-8 bg-card-bg dark:bg-card-bg border border-card-border rounded-2xl flex flex-row items-center justify-start gap-6 hover:border-accent/40 transition-colors duration-300 select-none shadow-sm"
            >
              {/* Service index circle */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-foreground text-background dark:bg-white dark:text-black flex items-center justify-center text-sm font-semibold tracking-tight">
                {service.index}
              </div>

              {/* Service name */}
              <p className="text-xl md:text-2xl font-light tracking-wide text-foreground">
                {service.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
