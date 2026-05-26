"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import ServicesSection from "@/components/ServicesSection";
import EngagementSection from "@/components/EngagementSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ErrorBoundary from "@/components/ErrorBoundary";

// Load 3D WebGL components dynamically (no SSR) to prevent server pre-rendering errors
const FloatingObject = dynamic(() => import("@/components/FloatingObject"), {
  ssr: false,
});

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen bg-transparent overflow-hidden flex flex-col items-center">
      
      {/* Dynamic 3D Metallic/Porcelain Wobbling Torus (R3F + GSAP) */}
      <ErrorBoundary fallback={null}>
        <FloatingObject />
      </ErrorBoundary>

      {/* Navigation menu */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Hero section */}
      <HeroSection />

      {/* Awards stats row */}
      <AboutSection />

      {/* Asymmetric Portfolio works section */}
      <WorkSection />

      {/* Capabilities 2x2 section */}
      <WhatWeBuild />

      {/* Sticky offerings/services section */}
      <ServicesSection />

      {/* Partnership models, values edge, and studio statistics section */}
      <EngagementSection onContactClick={() => setIsContactOpen(true)} />

      {/* FAQ accordions section */}
      <FAQSection />

      {/* collaboration footer */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Contact drawer overlay */}
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

    </main>
  );
}
